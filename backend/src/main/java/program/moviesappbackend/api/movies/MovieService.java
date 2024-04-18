package program.moviesappbackend.api.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovieById(int id, String username) {
        Optional<Movie> movie = movieRepository.findById(id, username);

        if(movie.isPresent()) {
            movie.get().setGenres(movieRepository.findGenresByMovieId(id));
            movie.get().setRatingDistribution(movieRepository.getRatingDistribution(id));
            movie.get().setWatchingStatusDistribution(movieRepository.getWatchingStatusDistribution(id));
            return movie;
        } else {
            return Optional.empty();
        }
    }

    public Optional<List<Movie>> getLatestMovies(int limit) {
        List<Movie> latestMovies = movieRepository.findLatestMovies(limit);

        return Optional.ofNullable(latestMovies);
    }

    public boolean updateWatchingStatus(int movieId, int watchingStatusId, String username) {
        return movieRepository.updateWatchingStatus(movieId, watchingStatusId, username);
    }
}
