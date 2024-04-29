package program.moviesappbackend.api.filter.mpaaRatings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MpaaRatingService {
    private final MpaaRatingRepository mpaaRatingRepository;

    @Autowired
    public MpaaRatingService(MpaaRatingRepository mpaaRatingRepository) {
        this.mpaaRatingRepository = mpaaRatingRepository;
    }

    public List<MpaaRating> getAllMpaaRatings() {
        return mpaaRatingRepository.getAllCountries();
    }
}
