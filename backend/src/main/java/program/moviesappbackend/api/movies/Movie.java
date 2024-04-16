package program.moviesappbackend.api.movies;

import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
@Builder
public class Movie {
    private long movieId;
    private String title;
    private int duration;
    private double rating;
    private String description;
    private String poster;
    private int releaseYear;
    private String moviePath;
    private Timestamp addedAt;
}
