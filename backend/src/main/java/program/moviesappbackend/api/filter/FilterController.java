package program.moviesappbackend.api.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import program.moviesappbackend.api.filter.actors.ActorService;
import program.moviesappbackend.api.filter.directors.DirectorService;
import program.moviesappbackend.api.filter.genres.Genre;
import program.moviesappbackend.api.filter.genres.GenreService;
import program.moviesappbackend.api.movies.models.Person;

import java.util.List;

@RestController
@RequestMapping("/api/filter")
public class FilterController {
    private final GenreService genreService;
    private final ActorService actorService;
    private final DirectorService directorService;

    @Autowired
    public FilterController(GenreService genreService, ActorService actorService, DirectorService directorService) {
        this.genreService = genreService;
        this.actorService = actorService;
        this.directorService = directorService;
    }

    @GetMapping("/")
    public Filter getFilterParams() {
        List<Genre> genres = genreService.getAllGenres();
        List<Person> actors = actorService.getAllActors();
        List<Person> directors = directorService.getAllDirectors();

        return new Filter(genres, actors, directors);
    }
}