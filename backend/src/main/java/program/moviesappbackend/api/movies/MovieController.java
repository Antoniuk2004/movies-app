package program.moviesappbackend.api.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import program.moviesappbackend.api.movies.models.Movie;
import program.moviesappbackend.api.movies.models.WatchingStatusBody;
import program.moviesappbackend.auth.services.TokenService;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private final MovieService movieService;

    private final TokenService tokenService;

    @Autowired
    public MovieController(MovieService movieService, TokenService tokenService) {
        this.movieService = movieService;
        this.tokenService = tokenService;
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
    public ResponseEntity<Movie> getMovieById(@PathVariable int id,
                                              @RequestHeader(name = "Authorization") String authorizationHeader) {
        String username = getUserId(authorizationHeader);
        if (username == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

        Optional<Movie> optionalMovie = movieService.getMovieById(id, username);

        if (optionalMovie.isPresent()) {
            Movie movie = optionalMovie.get();
            return new ResponseEntity<>(movie, HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}/watching-status")
    public ResponseEntity<Void> updateWatchingStatus(@PathVariable int id,
                                                     @RequestBody WatchingStatusBody body,
                                                     @RequestHeader(name = "Authorization") String authorizationHeader) {
        int watchingStatusId = body.getWatchingStatusId();

        String username = getUserId(authorizationHeader);
        if (username == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

        if (movieService.updateWatchingStatus(id, watchingStatusId, username)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private String getUserId(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String jwt = authorizationHeader.substring(7);

            Map<String, Object> validation = tokenService.validateJwt(jwt);
            return validation.get("sub").toString();
        }
        return null;
    }
}
