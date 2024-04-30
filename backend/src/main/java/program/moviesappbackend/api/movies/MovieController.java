package program.moviesappbackend.api.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import program.moviesappbackend.api.movies.bodies.MainPageMovies;
import program.moviesappbackend.api.movies.bodies.RatingBody;
import program.moviesappbackend.api.movies.models.FilterRequest;
import program.moviesappbackend.api.movies.models.Movie;
import program.moviesappbackend.api.movies.bodies.WatchingStatusBody;
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

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable int id,
                                              @RequestHeader(name = "Authorization") String authorizationHeader) {
        String username = getUsername(authorizationHeader);
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

        String username = getUsername(authorizationHeader);
        if (username == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

        if (movieService.updateWatchingStatus(id, watchingStatusId, username)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}/rating")
    public ResponseEntity<Void> updateRating(@PathVariable int id,
                                             @RequestBody RatingBody body,
                                             @RequestHeader(name = "Authorization") String authorizationHeader) {
        int rating = body.getRating();

        String username = getUsername(authorizationHeader);
        if (username == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

        if (movieService.updateRating(id, rating, username)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/filter")
    public ResponseEntity<List<Movie>> filterMovies(@RequestBody FilterRequest filterRequest,
                                                    @RequestHeader(name = "Authorization") String authorizationHeader) {
        String username = getUsername(authorizationHeader);
        List<Movie> movies = movieService.getFilteredMovies(filterRequest, username);

        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @GetMapping("/")
    private ResponseEntity<MainPageMovies> getMovies(@RequestParam(defaultValue = "10") int limit) {
        MainPageMovies mainPageMovies = MainPageMovies.builder()
                .recentMovies(movieService.getRecentMovies(limit))
                .popularMovies(movieService.getPopularMovies(limit))
                .recommendedMovies(movieService.getRecommendedMovies(limit))
                .build();

        return new ResponseEntity<>(mainPageMovies, HttpStatus.OK);
    }

    private String getUsername(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String jwt = authorizationHeader.substring(7);

            Map<String, Object> validation = tokenService.validateJwt(jwt);
            return validation.get("sub").toString();
        }
        return null;
    }


}
