package program.moviesappbackend.api.filter.watchingStatuses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class WatchingStatus {
    private long watchingStatusId;
    private String name;
}
