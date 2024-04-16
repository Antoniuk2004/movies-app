package program.moviesappbackend.api.filter.directors;

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
public class DirectorRepository {
    @Autowired
    Connection connection;

    @SneakyThrows
    public List<Director> getAllDirectors() {
        String sql = "SELECT * FROM directors";

        List<Director> directors = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Director director = Director.builder()
                        .directorId(resultSet.getInt("director_id"))
                        .firstName(resultSet.getString("first_name"))
                        .surname(resultSet.getString("surname"))
                        .birthdate(resultSet.getDate("birthdate"))
                        .nationality(resultSet.getString("nationality"))
                        .photo(resultSet.getString("photo"))
                        .biography(resultSet.getString("biography"))
                        .gender(Gender.valueOf(resultSet.getString("gender").toUpperCase()))
                        .build();
                directors.add(director);
            }
        }

        return directors;
    }
}
