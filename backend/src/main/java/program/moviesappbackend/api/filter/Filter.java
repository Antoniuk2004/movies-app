package program.moviesappbackend.api.filter;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import program.moviesappbackend.api.filter.genres.Genre;
import program.moviesappbackend.api.movies.models.Person;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class Filter {
    private List<Genre> genres;
    private List<Person> actors;
    private List<Person> directors;
}
