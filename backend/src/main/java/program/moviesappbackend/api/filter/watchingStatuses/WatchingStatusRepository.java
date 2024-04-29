package program.moviesappbackend.api.filter.watchingStatuses;

import lombok.SneakyThrows;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class WatchingStatusRepository {
    final Connection connection;

    public WatchingStatusRepository(Connection connection) {
        this.connection = connection;
    }

    @SneakyThrows
    public List<WatchingStatus> getAllCountries() {
        String sql = "SELECT * FROM watching_statuses";

        List<WatchingStatus> watchingStatuses = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("watching_status_id");
                String name = resultSet.getString("name");

                watchingStatuses.add(new WatchingStatus(id, name));
            }
        }

        return watchingStatuses;
    }
}
