package program.moviesappbackend.auth.services;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import program.moviesappbackend.auth.models.AuthResponse;
import program.moviesappbackend.auth.repositories.UserRepository;


@Service
public class AuthenticationService {
    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;

    private final TokenService tokenService;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthenticationService(UserRepository userRepository, AuthenticationManager authenticationManager, TokenService tokenService, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
        this.passwordEncoder = passwordEncoder;
    }

    @SneakyThrows
    public AuthResponse loginUser(String username, String password) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );

            String token = tokenService.generateJwt(auth);

            return new AuthResponse(true, token);
        } catch (AuthenticationException e) {
            System.out.println(username + " " + password + " " + e.getMessage());
            return new AuthResponse(false, null);
        }
    }

    public AuthResponse registerUser(String username, String password) {
        String encodedPassword = passwordEncoder.encode(password);
        int userId = userRepository.addUser(username, encodedPassword);

        if (userId != -1) {
            userRepository.addRoleToUser(userId);
        }

        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );

        String token = tokenService.generateJwt(auth);

        return new AuthResponse(true, token);
    }
}
