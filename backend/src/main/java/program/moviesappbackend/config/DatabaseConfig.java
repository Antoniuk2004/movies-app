package program.moviesappbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Configuration
public class DatabaseConfig {
    @Bean
    public Connection getConnection() throws SQLException {
        String url = "jdbc:postgresql://localhost:5050/postgres";
        String user = "postgres";
        String password = "postgres";

        return DriverManager.getConnection(url, user, password);
    }
}
