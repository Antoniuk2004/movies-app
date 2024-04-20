package program.moviesappbackend.api.movies;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import program.moviesappbackend.api.filter.genres.Genre;
import program.moviesappbackend.api.movies.models.Movie;
import program.moviesappbackend.api.movies.models.Person;
import program.moviesappbackend.api.movies.models.RatingDistribution;
import program.moviesappbackend.api.movies.models.WatchingStatusDistribution;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class MovieRepository {
    final Connection connection;

    @Autowired
    public MovieRepository(Connection connection) throws SQLException {
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
    public Optional<Movie> findById(int id, String username) {
        String sql = "SELECT MRO.rating as user_rating, R.rating, S.name AS studio,  " +
                "C.name AS origin_country, MR.rating_name AS mpaa_rating,  " +
                "WSO.name AS watching_status,M.movie_id, M.title, M.duration,  " +
                "M.description, M.cover, M.release_year, M.movie_path, M.added_at,  " +
                "M.banner   " +
                "FROM movies M   " +
                "INNER JOIN movies_countries MV ON M.movie_id = MV.movie_id   " +
                "INNER JOIN countries C ON C.country_id = MV.country_id   " +
                "INNER JOIN movies_mpaa_ratings MMR ON M.movie_id = MMR.movie_id   " +
                "INNER JOIN mpaa_ratings MR ON MR.rating_id = MMR.rating_id   " +
                "INNER JOIN movies_studios MS ON M.movie_id = MS.movie_id   " +
                "INNER JOIN studios S ON S.studio_id = MS.studio_id " +
                "INNER JOIN users UO ON UO.username = ? " +
                "LEFT JOIN movies_ratings MRO ON MRO.user_id = UO.user_id  " +
                "AND MRO.movie_id = M.movie_id " +
                "LEFT JOIN (   " +
                "     SELECT avg(rating) AS rating, MR.movie_id    " +
                "     FROM movies_ratings MR   " +
                "     GROUP BY MR.movie_id   " +
                ") AS R ON M.movie_id = R.movie_id   " +
                "LEFT JOIN LATERAL (   " +
                "     SELECT UWS.movie_id, WS.name   " +
                "     FROM users U    " +
                "     INNER JOIN users_watching_statuses UWS ON UWS.user_id = UO.user_id   " +
                "     INNER JOIN watching_statuses WS   " +
                "     ON WS.watching_status_id = UWS.watching_status_id   " +
                "     WHERE U.user_id = UO.user_id   " +
                ") AS WSO ON M.movie_id = WSO.movie_id   " +
                "WHERE M.movie_id = ?";

        Movie movie = null;

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, username);
            preparedStatement.setInt(2, id);

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
                .userRating(resultSet.getInt("user_rating"))
                .mpaaRating(resultSet.getString("mpaa_rating"))
                .studio(resultSet.getString("studio"))
                .originCountry(resultSet.getString("origin_country"))
                .movieId(resultSet.getInt("movie_id"))
                .watchingStatus(resultSet.getString("watching_status"))
                .title(resultSet.getString("title"))
                .duration(resultSet.getInt("duration"))
                .rating(resultSet.getDouble("rating"))
                .description(resultSet.getString("description"))
                .cover(resultSet.getString("cover"))
                .banner(resultSet.getString("banner"))
                .releaseYear(resultSet.getInt("release_year"))
                .moviePath(resultSet.getString("movie_path"))
                .addedAt(resultSet.getTimestamp("added_at"))
                .build();
    }

    @SneakyThrows
    public List<Genre> findGenresByMovieId(int id) {
        String sql = "SELECT * FROM movies_genres MG " +
                "INNER JOIN genres G ON G.genre_id = MG.genre_id " +
                "WHERE MG.movie_id = ?";

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, id);

            ResultSet resultSet = preparedStatement.executeQuery();

            List<Genre> genres = new ArrayList<>();
            while (resultSet.next()) {
                int genreId = resultSet.getInt("genre_id");
                String title = resultSet.getString("title");

                genres.add(new Genre(genreId, title));
            }
            return genres;
        }
    }

    @SneakyThrows
    public boolean updateWatchingStatus(int movieId, int watchingStatusId, String username) {
        String sql = "INSERT INTO users_watching_statuses (user_id, movie_id, watching_status_id) " +
                "SELECT U.user_id, ?, ? " +
                "FROM users AS U " +
                "WHERE U.username = ? " +
                "ON CONFLICT (user_id, movie_id) DO UPDATE " +
                "SET watching_status_id = EXCLUDED.watching_status_id";

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, movieId);
            preparedStatement.setInt(2, watchingStatusId);
            preparedStatement.setString(3, username);

            return preparedStatement.executeUpdate() > 0;
        }
    }

    @SneakyThrows
    public boolean updateRating(int movieId, int rating, String username) {
        String sql = "INSERT INTO movies_ratings (user_id, movie_id, rating) " +
                     "SELECT U.user_id, ?, ? " +
                     "FROM users AS U " +
                     "WHERE U.username = ? " +
                     "ON CONFLICT (user_id, movie_id) DO UPDATE " +
                     "SET rating = EXCLUDED.rating;";

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, movieId);
            preparedStatement.setInt(2, rating);
            preparedStatement.setString(3, username);

            return preparedStatement.executeUpdate() > 0;
        }
    }

    @SneakyThrows
    public List<RatingDistribution> getRatingDistribution(int movieId) {
        String sql = "SELECT rating, COUNT(*) " +
                "FROM movies_ratings " +
                "WHERE movie_id = ? " +
                "GROUP BY rating";

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, movieId);

            ResultSet resultSet = preparedStatement.executeQuery();

            List<RatingDistribution> ratingDistributions = new ArrayList<>();
            while (resultSet.next()) {
                int rating = resultSet.getInt("rating");
                int count = resultSet.getInt("count");

                ratingDistributions.add(new RatingDistribution(rating, count));
            }
            return ratingDistributions;
        }
    }

    @SneakyThrows
    public List<WatchingStatusDistribution> getWatchingStatusDistribution(int movieId) {
        String sql = "SELECT WS.name AS watching_status, COUNT(*) " +
                "FROM users_watching_statuses UWS " +
                "INNER JOIN watching_statuses WS " +
                "ON WS.watching_status_id = UWS.watching_status_id " +
                "WHERE UWS.movie_id = ? " +
                "GROUP BY WS.name";

        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, movieId);

            ResultSet resultSet = preparedStatement.executeQuery();

            List<WatchingStatusDistribution> watchingStatusDistributions = new ArrayList<>();
            while (resultSet.next()) {
                String name = resultSet.getString("watching_status");
                int count = resultSet.getInt("count");

                watchingStatusDistributions.add(new WatchingStatusDistribution(name, count));
            }
            return watchingStatusDistributions;
        }
    }

    @SneakyThrows
    public List<Person> getActorsByMovieId(int movieId) {
        String sql = "SELECT A.actor_id AS id, A.first_name, A.surname, " +
                "A.birthdate, A.nationality, A.photo FROM actors A " +
                "INNER JOIN movies_actors MV ON MV.actor_id = A.actor_id " +
                "WHERE MV.movie_id = ?";

        return getPeople(sql, movieId);
    }

    @SneakyThrows
    public List<Person> getDirectorsByMovieId(int movieId) {
        String sql = "SELECT A.director_id AS id, A.first_name, A.surname, " +
                "A.birthdate, A.nationality, A.photo FROM directors A " +
                "INNER JOIN movies_directors MV ON MV.director_id = A.director_id " +
                "WHERE MV.movie_id = ?";

        return getPeople(sql, movieId);
    }

    @SneakyThrows
    private List<Person> getPeople(String sql, int movieId) {
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, movieId);

            ResultSet resultSet = preparedStatement.executeQuery();

            List<Person> people = new ArrayList<>();
            while (resultSet.next()) {
                people.add(Person.builder()
                        .id(resultSet.getInt("id"))
                        .firstName(resultSet.getString("first_name"))
                        .surname(resultSet.getString("surname"))
                        .birthdate(resultSet.getTimestamp("birthdate"))
                        .nationality(resultSet.getString("nationality"))
                        .build());
            }
            return people;
        }
    }
}