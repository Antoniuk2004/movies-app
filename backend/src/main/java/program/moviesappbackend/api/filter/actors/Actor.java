package program.moviesappbackend.api.filter.actors;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import program.moviesappbackend.api.Gender;

import java.util.Date;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class Actor {
    private int actorId;
    private String firstName;
    private String surname;
    private Date birthdate;
    private String nationality;
    private String photo;
    private String biography;
    private Gender gender;
}
