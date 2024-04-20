package program.moviesappbackend.api.movies.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import program.moviesappbackend.api.filter.genres.Genre;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Builder
@Setter
public class Movie {
    private long movieId;
    private String watchingStatus;
    private String title;
    private int duration;
    private double rating;
    private String description;
    private String cover;
    private String banner;
    private int releaseYear;
    private String moviePath;
    private Timestamp addedAt;
    private List<Genre> genres;
    private String originCountry;
    private String mpaaRating;
    private String studio;
    private List<RatingDistribution> ratingDistribution;
    private List<WatchingStatusDistribution> watchingStatusDistribution;
    private List<Person> actors;
    private List<Person> directors;
    private int userRating;
}
