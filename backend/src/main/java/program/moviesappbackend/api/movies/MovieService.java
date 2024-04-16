package program.moviesappbackend.api.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Optional<Movie> getMovieById(int id) {
        return movieRepository.findById(id);
    }

    public Optional<List<Movie>> getLatestMovies(int limit) {
        List<Movie> latestMovies = movieRepository.findLatestMovies(limit);

        return Optional.ofNullable(latestMovies);
    }
}
