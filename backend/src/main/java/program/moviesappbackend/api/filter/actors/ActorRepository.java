package program.moviesappbackend.api.filter.actors;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import program.moviesappbackend.api.Gender;
import program.moviesappbackend.api.movies.models.Person;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ActorRepository {
    @Autowired
    Connection connection;

    @SneakyThrows
    List<Person> findAllActors() {
        String sql = "SELECT * FROM actors";

        List<Person> actors = new ArrayList<>();

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Person actor = Person.builder()
                        .id(resultSet.getInt("actor_id"))
                        .firstName(resultSet.getString("first_name"))
                        .surname(resultSet.getString("surname"))
                        .birthdate(resultSet.getTimestamp("birthdate"))
                        .nationality(resultSet.getString("nationality"))
                        .photo(resultSet.getString("photo"))
                        .build();

                actors.add(actor);
            }
        }

        return actors;
    }
}
