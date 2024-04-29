package program.moviesappbackend.api.filter.queryConditions;

import program.moviesappbackend.api.movies.models.FilterRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FirstQueryCondition {
    public void addFirstCondition(StringBuilder query, FilterRequest filterRequest, String username) {
        Map<String, List<Integer>> lists = makeListOfLists(filterRequest);

        query.append(" LEFT JOIN (SELECT * FROM users) AS UI1 ON UI1.username = '")
                .append(username).append("' ");
        query.append(" LEFT JOIN users_watching_statuses UWS ON M.movie_id = UWS.movie_id AND UWS.user_id = UI1.user_id ");
        query.append(" LEFT JOIN watching_statuses WS ON WS.watching_status_id = UWS.watching_status_id ");

        if (checkIfFirstConditionListsAreNull(lists)) return;

        query.append(" INNER JOIN (SELECT M.movie_id FROM movies M ");
        query.append(" INNER JOIN movies_genres MG ON M.movie_id = MG.movie_id ");
        query.append(" INNER JOIN movies_actors MA ON M.movie_id = MA.movie_id ");
        query.append(" INNER JOIN movies_directors MD ON M.movie_id = MD.movie_id ");

        addFirstConditionArrays(lists, query);
        addHaving(lists, query);
    }

    private Boolean checkIfFirstConditionListsAreNull(Map<String, List<Integer>> lists) {
        List<Integer> listOfGenres = lists.get("genres");
        List<Integer> listOfActors = lists.get("actors");
        List<Integer> listOfDirectors = lists.get("directors");

        return (listOfGenres == null || listOfGenres.isEmpty()) &&
                (listOfActors == null || listOfActors.isEmpty()) &&
                (listOfDirectors == null || listOfDirectors.isEmpty());
    }

    private void addFirstConditionArrays(Map<String, List<Integer>> lists, StringBuilder query) {
        List<Integer> listOfGenres = lists.get("genres");
        List<Integer> listOfActors = lists.get("actors");
        List<Integer> listOfDirectors = lists.get("directors");

        boolean useAnd = false;

        if (listOfGenres != null && !listOfGenres.isEmpty()) {
            String genres = listOfGenres.stream().map(Object::toString).collect(Collectors.joining(","));
            query.append(" WHERE MG.genre_id IN (").append(genres).append(") ");
            useAnd = true;
        }

        if (listOfActors != null && !listOfActors.isEmpty()) {
            if (useAnd) query.append(" AND ");
            else query.append(" WHERE ");
            String actors = listOfActors.stream().map(Object::toString).collect(Collectors.joining(","));
            query.append(" MA.actor_id IN (").append(actors).append(") ");
            useAnd = true;
        }

        if (listOfDirectors != null && !listOfDirectors.isEmpty()) {
            if (useAnd) query.append(" AND ");
            else query.append(" WHERE ");
            String directors = listOfDirectors.stream().map(Object::toString).collect(Collectors.joining(","));
            query.append(" MD.director_id IN (").append(directors).append(") ");
        }
    }

    private Map<String, List<Integer>> makeListOfLists(FilterRequest filterRequest) {
        Map<String, List<Integer>> lists = new HashMap<>();
        if (filterRequest.getGenres() != null) {
            lists.put("genres", filterRequest.getGenres());
        }
        if (filterRequest.getActors() != null) {
            lists.put("actors", filterRequest.getActors());
        }
        if (filterRequest.getDirectors() != null) {
            lists.put("directors", filterRequest.getDirectors());
        }

        return lists;
    }

    private void addHaving(Map<String, List<Integer>> lists, StringBuilder query) {
        List<Integer> listOfGenres = lists.get("genres");
        List<Integer> listOfActors = lists.get("actors");
        List<Integer> listOfDirectors = lists.get("directors");

        query.append(" GROUP BY M.movie_id ");

        boolean useAnd = false;

        if (listOfGenres != null && !listOfGenres.isEmpty()) {
            query.append(" HAVING COUNT(DISTINCT MG.genre_id) = ").append(listOfGenres.size());
            useAnd = true;
        }

        if (listOfActors != null && !listOfActors.isEmpty()) {
            if (useAnd) query.append(" AND ");
            else query.append(" HAVING ");
            query.append(" COUNT(DISTINCT MA.actor_id) = ").append(listOfActors.size());
            useAnd = true;
        }

        if (listOfDirectors != null && !listOfDirectors.isEmpty()) {
            if (useAnd) query.append(" AND ");
            else query.append(" HAVING ");
            query.append(" COUNT(DISTINCT MD.director_id) = ").append(listOfDirectors.size());
        }

        query.append(") AS Conditions1 ON M.movie_id = Conditions1.movie_id ");
    }
}
