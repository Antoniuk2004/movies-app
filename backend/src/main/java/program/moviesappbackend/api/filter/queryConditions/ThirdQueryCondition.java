package program.moviesappbackend.api.filter.queryConditions;

import program.moviesappbackend.api.movies.models.FilterRequest;
import program.moviesappbackend.api.movies.models.Order;
import program.moviesappbackend.api.movies.models.OrderType;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ThirdQueryCondition {
    public void addThirdCondition(StringBuilder query, FilterRequest filterRequest) {

        query.append(" INNER JOIN movies_countries MV ON MV.movie_id = M.movie_id " +
                "INNER JOIN countries C ON C.country_id = MV.country_id " +
                "INNER JOIN movies_studios MS ON M.movie_id = MS.movie_id ");

        boolean whereUsed = addRating(query, filterRequest);
        whereUsed = addList(query, filterRequest.getStudios(), "MS.studio_id", whereUsed);
        whereUsed = addList(query, filterRequest.getCountries(), "C.country_id", whereUsed);
        whereUsed = addList(query, filterRequest.getMpaaRatings(), "mpaa_rating", whereUsed);
        whereUsed = addFromToValues(query, filterRequest, whereUsed);
        addSearch(query, filterRequest, whereUsed);
        addOrder(query, filterRequest);
        addLimitOffset(query, filterRequest);
    }

    private void addSearch(StringBuilder query, FilterRequest filterRequest, boolean whereUsed) {
        String search = filterRequest.getSearch();
        if (search == null || search.isEmpty()) return;
        search = search.toLowerCase();

        addWhereOrAnd(query, whereUsed);
        query.append(" LOWER(M.title) LIKE '%").append(search).append("%' ");
    }

    private void addOrder(StringBuilder query, FilterRequest filterRequest) {
        Order order = filterRequest.getOrder();
        OrderType orderType = filterRequest.getOrderType();
        String orderTypeValue = getOrderTypeMap().get(orderType);

        query.append(" ORDER BY ").append(orderTypeValue).append(" ").append(order).append(" ");
    }

    private boolean addFromToValues(StringBuilder query, FilterRequest filterRequest, boolean whereUsed) {
        int durationFrom = filterRequest.getDurationFrom();
        int durationTo = filterRequest.getDurationTo();
        whereUsed = addFromTo(query, durationFrom, durationTo, "duration", whereUsed);

        int releaseYearFrom = filterRequest.getYearFrom();
        int releaseYearTo = filterRequest.getYearTo();
        whereUsed = addFromTo(query, releaseYearFrom, releaseYearTo, "release_year", whereUsed);

        return whereUsed;
    }

    private void addLimitOffset(StringBuilder query, FilterRequest filterRequest) {
        int limit = filterRequest.getLimit();
        int offset = filterRequest.getOffset();

        if (limit != 0) query.append(" Limit ").append(limit);
        else query.append(" Limit 50");

        if (offset != 0) query.append(" Offset ").append(offset);
        else query.append(" Offset 0");

        query.append(";");
    }

    private boolean addRating(StringBuilder query, FilterRequest filterRequest) {
        int ratingFrom = filterRequest.getRatingFrom();
        int ratingTo = filterRequest.getRatingTo();


        query.append(" LEFT JOIN ( " +
                "    SELECT MRI.movie_id, AVG(rating) AS avg_rating " +
                "    FROM movies_ratings MRI GROUP BY MRI.movie_id " +
                ") AS MR ON M.movie_id = MR.movie_id ");

        if (ratingFrom == 0 && ratingTo == 0) return false;
        query.append(" WHERE ");

        boolean useAnd = false;
        if (ratingFrom != 0) {
            query.append(" MR.avg_rating > ").append(ratingFrom);
            useAnd = true;
        }

        if (ratingTo != 0) {
            if (useAnd) query.append(" AND ");
            query.append(" MR.avg_rating < ").append(ratingTo);
        }

        return true;
    }

    private boolean addList(StringBuilder query, List<Integer> list,
                            String columnName, boolean whereUsed) {

        if (list == null || list.isEmpty()) return whereUsed;
        addWhereOrAnd(query, whereUsed);

        String listString = list.stream()
                .map(Object::toString)
                .collect(Collectors.joining(","));
        query.append(columnName).append(" IN (").append(listString).append(") ");

        return true;
    }

    private boolean addFromTo(StringBuilder query, int from, int to,
                              String columnName, boolean whereUsed) {
        if (from == 0 && to == 0) return whereUsed;

        if (from != 0) {
            whereUsed = addWhereOrAnd(query, whereUsed);
            query.append(columnName).append(" >= ").append(from);
        }
        if (to != 0) {
            whereUsed = addWhereOrAnd(query, whereUsed);
            query.append(columnName).append(" <= ").append(to);
        }

        return whereUsed;
    }

    private Map<OrderType, String> getOrderTypeMap() {
        return Map.of(
                OrderType.NAME, "M.title",
                OrderType.RATING, "MR.avg_rating",
                OrderType.RELEASE_YEAR, "M.release_year",
                OrderType.DURATION, "M.du,ration",
                OrderType.NOVELTY, "M.added_at"
        );
    }

    private boolean addWhereOrAnd(StringBuilder query, boolean whereUsed) {
        if (whereUsed) query.append(" AND ");
        else query.append(" WHERE ");
        return true;
    }
}
