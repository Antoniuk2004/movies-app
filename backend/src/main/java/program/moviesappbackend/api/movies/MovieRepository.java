package program.moviesappbackend.api.movies;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class MovieRepository {
    final Connection connection;

    public MovieRepository(Connection connection) {
        this.connection = connection;
    }

    @SneakyThrows
    public List<Movie> findLatestMovies(int limit) {
        String sql = "SELECT * FROM movies ORDER BY added_at DESC limit ?";

        List<Movie> movies = new ArrayList<>();

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, limit);

            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                movies.add(buildMovie(resultSet));
            }
        }

        return movies;
    }

    @SneakyThrows
    public List<Movie> findAll() {
        String sql = "SELECT * FROM movies";

        List<Movie> movies = new ArrayList<>();

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                movies.add(buildMovie(resultSet));
            }
        }

        return movies;
    }

    @SneakyThrows
    public Optional<Movie> findById(int id) {
        String sql = "SELECT * FROM movies WHERE movie_id = ?";

        Movie movie = null;

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, id);

            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                movie = buildMovie(resultSet);
            }
        }

        return Optional.ofNullable(movie);
    }

    @SneakyThrows
    private Movie buildMovie(ResultSet resultSet) {
        return Movie.builder()
                .movieId(resultSet.getInt("movie_id"))
                .title(resultSet.getString("title"))
                .duration(resultSet.getInt("duration"))
                .rating(resultSet.getDouble("rating"))
                .description(resultSet.getString("description"))
                .poster(resultSet.getString("poster"))
                .releaseYear(resultSet.getInt("release_year"))
                .moviePath(resultSet.getString("movie_path"))
                .addedAt(resultSet.getTimestamp("added_at"))
                .build();
    }
}
