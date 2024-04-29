package program.moviesappbackend.api.filter;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import program.moviesappbackend.api.filter.countries.Country;
import program.moviesappbackend.api.filter.genres.Genre;
import program.moviesappbackend.api.filter.mpaaRatings.MpaaRating;
import program.moviesappbackend.api.filter.studios.Studio;
import program.moviesappbackend.api.filter.watchingStatuses.WatchingStatus;
import program.moviesappbackend.api.movies.models.Person;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class Filter {
    private List<Genre> genres;
    private List<FilterPerson> actors;
    private List<FilterPerson> directors;
    private List<Country> countries;
    private List<Studio> studios;
    private List<MpaaRating> mpaaRatings;
    private List<WatchingStatus> watchingStatuses;
}
