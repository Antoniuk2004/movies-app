package program.moviesappbackend.api.movies.bodies;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import program.moviesappbackend.api.movies.models.Movie;

import java.util.List;

@Getter
@Setter
@Builder
public class MainPageMovies {
    List<Movie> recentMovies;
    List<Movie> popularMovies;
    List<Movie> recommendedMovies;
}
