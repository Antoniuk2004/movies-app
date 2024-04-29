package program.moviesappbackend.api.filter.watchingStatuses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchingStatusService {
    private final WatchingStatusRepository watchingStatusRepository;

    @Autowired
    public WatchingStatusService(WatchingStatusRepository watchingStatusRepository) {
        this.watchingStatusRepository = watchingStatusRepository;
    }

    public List<WatchingStatus> getAllWatchingStatuses() {
        return watchingStatusRepository.getAllCountries();
    }
}
