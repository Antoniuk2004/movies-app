package program.moviesappbackend.api.filter.actors;

import lombok.SneakyThrows;
import org.springframework.stereotype.Repository;
import program.moviesappbackend.api.filter.FilterPerson;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ActorRepository {
    final
    Connection connection;

    public ActorRepository(Connection connection) {
        this.connection = connection;
    }

    @SneakyThrows
    List<FilterPerson> findAllActors() {
        String sql = "SELECT actor_id, first_name, surname FROM actors";

        List<FilterPerson> actors = new ArrayList<>();

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                FilterPerson actor = FilterPerson.builder()
                        .id(resultSet.getInt("actor_id"))
                        .firstName(resultSet.getString("first_name"))
                        .surname(resultSet.getString("surname"))
                        .build();

                actors.add(actor);
            }
        }

        return actors;
    }
}
