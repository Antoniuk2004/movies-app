package program.moviesappbackend.api.filter.actors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import program.moviesappbackend.api.movies.models.Person;

import java.util.List;

@Service
public class ActorService {
    private final ActorRepository actorRepository;

    @Autowired
    public ActorService(ActorRepository actorRepository) {
        this.actorRepository = actorRepository;
    }

    public List<Person> getAllActors() {
        return actorRepository.findAllActors();
    }
}
