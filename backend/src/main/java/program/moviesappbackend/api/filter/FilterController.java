package program.moviesappbackend.api.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import program.moviesappbackend.api.filter.actors.ActorService;
import program.moviesappbackend.api.filter.countries.CountryService;
import program.moviesappbackend.api.filter.directors.DirectorService;
import program.moviesappbackend.api.filter.genres.GenreService;
import program.moviesappbackend.api.filter.mpaaRatings.MpaaRatingService;
import program.moviesappbackend.api.filter.studios.StudioService;
import program.moviesappbackend.api.filter.watchingStatuses.WatchingStatusService;

@RestController
@RequestMapping("/api/filter")
public class FilterController {
    private final GenreService genreService;
    private final ActorService actorService;
    private final DirectorService directorService;
    private final StudioService studioService;
    private final CountryService countryService;
    private final MpaaRatingService mpaaRatingService;
    private final WatchingStatusService watchingStatusService;

    @Autowired
    public FilterController(GenreService genreService, ActorService actorService, DirectorService directorService, StudioService studioService, CountryService countryService, MpaaRatingService mpaaRating, WatchingStatusService watchingStatus) {
        this.genreService = genreService;
        this.actorService = actorService;
        this.directorService = directorService;
        this.studioService = studioService;
        this.countryService = countryService;
        this.mpaaRatingService = mpaaRating;
        this.watchingStatusService = watchingStatus;
    }

    @GetMapping("/")
    public Filter getFilterParams() {

        return Filter.builder()
                .actors(actorService.getAllActors())
                .countries(countryService.getAllCountries())
                .directors(directorService.getAllDirectors())
                .genres(genreService.getAllGenres())
                .studios(studioService.getAllStudios())
                .mpaaRatings(mpaaRatingService.getAllMpaaRatings())
                .watchingStatuses(watchingStatusService.getAllWatchingStatuses())
                .build();
    }
}