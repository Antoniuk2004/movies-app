package program.moviesappbackend.api.filter.directors;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import program.moviesappbackend.api.Gender;

import java.util.Date;

@Getter
@Setter
@Builder
public class Director {
    private int directorId;
    private String firstName;
    private String surname;
    private Date birthdate;
    private String nationality;
    private String photo;
    private String biography;
    private Gender gender;
}