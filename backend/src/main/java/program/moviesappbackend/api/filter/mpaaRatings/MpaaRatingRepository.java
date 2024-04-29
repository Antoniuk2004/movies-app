package program.moviesappbackend.api.filter.mpaaRatings;

import lombok.SneakyThrows;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MpaaRatingRepository {
    final Connection connection;

    public MpaaRatingRepository(Connection connection) {
        this.connection = connection;
    }

    @SneakyThrows
    public List<MpaaRating> getAllCountries() {
        String sql = "SELECT * FROM mpaa_ratings";

        List<MpaaRating> mpaaRatings = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("rating_id");
                String name = resultSet.getString("rating_name");

                mpaaRatings.add(new MpaaRating(id, name));
            }
        }

        return mpaaRatings;
    }
}
