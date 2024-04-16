package program.moviesappbackend.api.filter;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import program.moviesappbackend.api.filter.actors.Actor;
import program.moviesappbackend.api.filter.directors.Director;
import program.moviesappbackend.api.filter.genres.Genre;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class Filter {
    private List<Genre> genres;
    private List<Actor> actors;
    private List<Director> directors;
}
