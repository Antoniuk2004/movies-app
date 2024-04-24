package program.moviesappbackend.auth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import program.moviesappbackend.auth.models.MessageDTO;
import program.moviesappbackend.auth.models.LoginResponseDTO;
import program.moviesappbackend.auth.models.UserDTO;
import program.moviesappbackend.auth.services.AuthenticationService;
import program.moviesappbackend.auth.services.TokenService;
import program.moviesappbackend.auth.services.UserService;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationService authenticationService;

    private final TokenService tokenService;

    private final UserService userService;

    @Autowired
    public AuthController(AuthenticationService authenticationService, TokenService tokenService, UserService userService) {
        this.authenticationService = authenticationService;
        this.tokenService = tokenService;
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<MessageDTO> registerUser(@RequestBody UserDTO body) {
        boolean success = authenticationService.registerUser(body.getUsername(), body.getPassword());
        if (success) return new ResponseEntity<>(new MessageDTO("User registered successfully"), HttpStatus.OK);
        else return new ResponseEntity<>(new MessageDTO("Username already exists"), HttpStatus.CONFLICT);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> loginUser(@RequestBody UserDTO body) {
        LoginResponseDTO loginResponseDTO = authenticationService.loginUser(body.getUsername(), body.getPassword());

        if (loginResponseDTO.isSuccess()) {
            return new ResponseEntity<>(loginResponseDTO, HttpStatus.OK);
        } else return new ResponseEntity<>(loginResponseDTO, HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/validate")
    public ResponseEntity<Void> validateUser(@RequestHeader(name = "Authorization") String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String jwt = authorizationHeader.substring(7);

            Map<String, Object> validation = tokenService.validateJwt(jwt);
            String username = validation.get("sub").toString();

            if (userService.checkIfUserExists(username)) {
                return new ResponseEntity<>(HttpStatus.OK);
            } else return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}
