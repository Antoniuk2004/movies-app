package program.moviesappbackend.utils;

import program.moviesappbackend.api.filter.queryConditions.FirstQueryCondition;
import program.moviesappbackend.api.filter.queryConditions.SecondQueryCondition;
import program.moviesappbackend.api.filter.queryConditions.ThirdQueryCondition;
import program.moviesappbackend.api.movies.models.FilterRequest;

public class QueryBuilder {
    public String buildFilterQuery(FilterRequest filterRequest, String username) {
        StringBuilder query = new StringBuilder("SELECT M.movie_id, M.title, M.duration, M.release_year, " +
                "M.mpaa_rating, M.added_at, M.cover, M.description, MR.avg_rating, " +
                "WS.name as watching_status FROM movies M ");

        FirstQueryCondition firstQueryCondition = new FirstQueryCondition();
        SecondQueryCondition secondQueryCondition = new SecondQueryCondition();
        ThirdQueryCondition thirdQueryCondition = new ThirdQueryCondition();

        firstQueryCondition.addFirstCondition(query, filterRequest, username);
        secondQueryCondition.addSecondCondition(query, filterRequest);
        thirdQueryCondition.addThirdCondition(query, filterRequest);

        return query.toString();
    }
}
