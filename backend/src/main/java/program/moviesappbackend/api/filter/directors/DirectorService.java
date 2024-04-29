package program.moviesappbackend.api.filter.directors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import program.moviesappbackend.api.filter.FilterPerson;
import program.moviesappbackend.api.movies.models.Person;

import java.util.List;

@Service
public class DirectorService {
    private final DirectorRepository directorRepository;

    @Autowired
    public DirectorService(DirectorRepository directorRepository) {
        this.directorRepository = directorRepository;
    }

    public List<FilterPerson> getAllDirectors() {
        return directorRepository.getAllDirectors();
    }
}
