package program.moviesappbackend.api.filter.studios;

import lombok.SneakyThrows;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class StudioRepository {
    final Connection connection;

    public StudioRepository(Connection connection) {
        this.connection = connection;
    }

    @SneakyThrows
    public List<Studio> getAllStudios() {
        String sql = "SELECT * FROM studios";

        List<Studio> studios = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("studio_id");
                String name = resultSet.getString("name");

                studios.add(new Studio(id, name));
            }
        }

        return studios;
    }
}
