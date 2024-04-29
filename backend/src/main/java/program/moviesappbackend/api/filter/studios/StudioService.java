package program.moviesappbackend.api.filter.studios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import program.moviesappbackend.api.filter.countries.Country;

import java.util.List;

@Service
public class StudioService {
    private final StudioRepository studioRepository;

    @Autowired
    public StudioService(StudioRepository studioRepository) {
        this.studioRepository = studioRepository;
    }

    public List<Studio> getAllStudios() {
        return studioRepository.getAllStudios();
    }
}
