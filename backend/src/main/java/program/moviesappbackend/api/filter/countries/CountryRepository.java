package program.moviesappbackend.api.filter.countries;

import lombok.SneakyThrows;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CountryRepository {
    final Connection connection;

    public CountryRepository(Connection connection) {
        this.connection = connection;
    }

    @SneakyThrows
    public List<Country> getAllCountries() {
        String sql = "SELECT * FROM countries";

        List<Country> countries = new ArrayList<>();
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("country_id");
                String name = resultSet.getString("name");

                countries.add(new Country(id, name));
            }
        }

        return countries;
    }
}
