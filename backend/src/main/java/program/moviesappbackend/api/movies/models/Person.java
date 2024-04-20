package program.moviesappbackend.api.movies.models;

import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;


@Getter
@Builder
public class Person {
    private int id;
    private String firstName;
    private String surname;
    private Timestamp birthdate;
    private String nationality;
    private String photo;
}
