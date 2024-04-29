package program.moviesappbackend.api.filter.directors;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import program.moviesappbackend.api.Gender;
import program.moviesappbackend.api.filter.FilterPerson;
import program.moviesappbackend.api.movies.models.Person;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class DirectorRepository {
    @Autowired
    Connection connection;

    @SneakyThrows
    public List<FilterPerson> getAllDirectors() {
        String sql = "SELECT director_id, first_name, surname FROM directors";

        List<FilterPerson> directors = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                FilterPerson director = FilterPerson.builder()
                        .id(resultSet.getInt("director_id"))
                        .firstName(resultSet.getString("first_name"))
                        .surname(resultSet.getString("surname"))
                        .build();
                directors.add(director);
            }
        }

        return directors;
    }
}
