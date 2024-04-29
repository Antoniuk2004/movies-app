package program.moviesappbackend.api.filter.mpaaRatings;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MpaaRating {
    private long ratingId;
    private String name;
}
