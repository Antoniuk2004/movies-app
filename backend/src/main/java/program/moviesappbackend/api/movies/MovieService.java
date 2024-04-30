package program.moviesappbackend.api.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import program.moviesappbackend.api.movies.models.FilterRequest;
import program.moviesappbackend.api.movies.models.Movie;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Optional<Movie> getMovieById(int id, String username) {
        Optional<Movie> movie = movieRepository.findById(id, username);

        if (movie.isPresent()) {
            movie.get().setGenres(movieRepository.findGenresByMovieId(id));
            movie.get().setRatingDistribution(movieRepository.getRatingDistribution(id));
            movie.get().setWatchingStatusDistribution(movieRepository
                    .getWatchingStatusDistribution(id));
            movie.get().setActors(movieRepository.getActorsByMovieId(id));
            movie.get().setDirectors(movieRepository.getDirectorsByMovieId(id));
            return movie;
        } else {
            return Optional.empty();
        }
    }

    public List<Movie> getRecentMovies(int limit) {
        return movieRepository.findRecentMovies(limit);
    }

    public boolean updateWatchingStatus(int movieId, int watchingStatusId, String username) {
        return movieRepository.updateWatchingStatus(movieId, watchingStatusId, username);
    }

    public boolean updateRating(int movieId, int rating, String username) {
        return movieRepository.updateRating(movieId, rating, username);
    }

    public List<Movie> getFilteredMovies(FilterRequest filterRequest, String username) {
        return movieRepository.findFilteredMovies(filterRequest, username);
    }

    public List<Movie> getPopularMovies(int limit) {
        return movieRepository.findPopularMovies(limit);
    }

    public List<Movie> getRecommendedMovies(int limit) {
        return movieRepository.findRecommendedMovies(limit);
    }
}
