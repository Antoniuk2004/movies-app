package program.moviesappbackend.api.filter;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class FilterPerson {
    private int id;
    private String firstName;
    private String surname;
}
