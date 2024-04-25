package program.moviesappbackend.api.movies.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class FilterRequest {
    private List<Integer> genres;
    private List<Integer> actors;
    private List<Integer> directors;
    private List<Integer> includedWatchingStatuses;
    private List<Integer> excludedWatchingStatuses;
    private List<Integer> mpaaRatings;
    private List<Integer> countries;
    private List<Integer> studios;
    private int yearFrom;
    private int yearTo;
    private int ratingFrom;
    private int ratingTo;
    private int durationFrom;
    private int durationTo;
    private int limit = 50;
    private int offset = 0;
    private Order order;
    private OrderType orderType;
    private String search;
}