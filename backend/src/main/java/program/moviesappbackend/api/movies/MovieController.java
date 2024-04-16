package program.moviesappbackend.api.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/all")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/latest")
    public ResponseEntity<List<Movie>> getLatestMovies(@RequestParam(name = "limit", defaultValue = "10") int limit) {
        Optional<List<Movie>> optionalMovies = movieService.getLatestMovies(limit);

        if (optionalMovies.isPresent()) {
            List<Movie> movies = optionalMovies.get();
            return new ResponseEntity<>(movies, HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable int id) {
        Optional<Movie> optionalMovie = movieService.getMovieById(id);

        if (optionalMovie.isPresent()) {
            Movie movie = optionalMovie.get();
            return new ResponseEntity<>(movie, HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
