package program.moviesappbackend.api.filter.queryConditions;

import program.moviesappbackend.api.movies.models.FilterRequest;

import java.util.List;
import java.util.stream.Collectors;

public class SecondQueryCondition {
    public void addSecondCondition(StringBuilder query, FilterRequest filterRequest) {
        List<Integer> included = filterRequest.getIncludedWatchingStatuses();
        List<Integer> excluded = filterRequest.getExcludedWatchingStatuses();

        if (included == null && excluded == null) return;

        if(included != null) query.append(" INNER ");
        else query.append(" LEFT ");
        query.append(" JOIN ( " +
                "    SELECT M.movie_id " +
                "    FROM movies M " +
                "    INNER JOIN ( " +
                "        SELECT UI.username, UWJ.movie_id " +
                "        FROM users UI " +
                "        INNER JOIN users_watching_statuses UWJ ON UI.user_id = UWJ.user_id " +
                "        WHERE ");

        boolean shouldAndBeAdded = included != null && excluded != null;
        addStatuses(query, included, true, false);
        addStatuses(query, excluded, false, shouldAndBeAdded);

        query.append(") AS U ON M.movie_id = U.movie_id " +
                "    WHERE U.username = 'alex' " +
                ") AS Conditions2 ON M.movie_id = Conditions2.movie_id");
    }

    private void addStatuses(StringBuilder query, List<Integer> listOfStatuses, boolean included,
                             boolean shouldAddBeAdded) {
        if (listOfStatuses != null) {
            String includedString = listOfStatuses.stream()
                    .map(Object::toString)
                    .collect(Collectors.joining(","));

            if (included) query.append(" UWJ.watching_status_id IN (");
            else {
                if (shouldAddBeAdded) query.append(" AND ");
                query.append(" UWJ.watching_status_id ");
                query.append(" NOT IN (");
            }

            query.append(includedString).append(") ");
        }
    }
}
