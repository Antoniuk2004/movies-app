package program.moviesappbackend.api.movies.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class RatingDistribution {
    int rating;
    int count;
}
