package program.moviesappbackend.auth.repositories;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import program.moviesappbackend.auth.models.ApplicationUser;
import program.moviesappbackend.auth.models.Role;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashSet;
import java.util.Set;

@Repository
public class UserRepository {
    private final Connection connection;

    @Autowired
    public UserRepository(Connection connection) {
        this.connection = connection;
    }

    @SneakyThrows
    public int addUser(String username, String password) {
        int userId = -1;

        String sql = "INSERT INTO users (username, password) VALUES (?, ?) RETURNING user_id";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);

            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                userId = resultSet.getInt("user_id");
            }
        }

        return userId;
    }

    @SneakyThrows
    public void addRoleToUser(int userId) {
        String sql = "INSERT INTO user_role_junction (user_id, role_id) VALUES (?, ?)";

        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setInt(1, userId);
            pstmt.setInt(2, 2);

            pstmt.execute();
        }
    }

    @SneakyThrows
    public ApplicationUser findByUsername(String username) {
        ApplicationUser user;

        String sql = "SELECT users.*, " +
                "roles.* " +
                "FROM users " +
                "JOIN user_role_junction ON user_role_junction.user_id = users.user_id " +
                "JOIN roles ON roles.role_id = user_role_junction.role_id " +
                "WHERE users.username = ?";

        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, username);

            ResultSet resultSet = pstmt.executeQuery();
            user = addUserData(resultSet, username);
        }

        return user;
    }

    @SneakyThrows
    private ApplicationUser addUserData(ResultSet resultSet, String username) {
        if (resultSet.next()) {
            int userId = resultSet.getInt("user_id");
            String password = resultSet.getString("password");
            String profilePicture = resultSet.getString("profile_picture");
            int roleId = resultSet.getInt("role_id");
            String authority = resultSet.getString("authority");

            Set<Role> roles = new HashSet<>();
            roles.add(new Role(roleId, authority));

            ApplicationUser user = ApplicationUser.builder()
                    .userId(userId)
                    .username(username)
                    .password(password)
                    .profilePicture(profilePicture)
                    .authorities(roles)
                    .build();
            return user;
        }

        return new ApplicationUser();
    }
}
