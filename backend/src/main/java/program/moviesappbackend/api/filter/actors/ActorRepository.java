package program.moviesappbackend.api.filter.actors;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import program.moviesappbackend.api.Gender;

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
    List<Actor> findAllActors() {
        String sql = "SELECT * FROM actors";

        List<Actor> actors = new ArrayList<>();

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Actor actor = Actor.builder()
                        .actorId(resultSet.getInt("actor_id"))
                        .firstName(resultSet.getString("first_name"))
                        .surname(resultSet.getString("surname"))
                        .birthdate(resultSet.getDate("birthdate"))
                        .nationality(resultSet.getString("nationality"))
                        .photo(resultSet.getString("photo"))
                        .biography(resultSet.getString("biography"))
                        .gender(Gender.valueOf(resultSet.getString("gender").toUpperCase()))
                        .build();

                actors.add(actor);
            }
        }

        return actors;
    }
}
