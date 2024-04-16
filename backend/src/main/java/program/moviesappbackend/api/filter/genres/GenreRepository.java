package program.moviesappbackend.api.filter.genres;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class GenreRepository {
    @Autowired
    Connection connection;

    @SneakyThrows
    public List<Genre> getAllGenres() {
        String sql = "SELECT * FROM genres";

        List<Genre> genres = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("genre_id");
                String title = resultSet.getString("title");

                genres.add(new Genre(id, title));
            }
        }

        return genres;
    }
}
