package program.moviesappbackend.auth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import program.moviesappbackend.auth.models.MessageDTO;
import program.moviesappbackend.auth.models.LoginResponseDTO;
import program.moviesappbackend.auth.models.UserDTO;
import program.moviesappbackend.auth.services.AuthenticationService;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<MessageDTO> registerUser(@RequestBody UserDTO body){
        boolean success = authenticationService.registerUser(body.getUsername(), body.getPassword());
        if(success) return new ResponseEntity<>(new MessageDTO("User registered successfully"), HttpStatus.OK);
        else return new ResponseEntity<>(new MessageDTO("Username already exists"), HttpStatus.CONFLICT);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> loginUser(@RequestBody UserDTO body){
        LoginResponseDTO loginResponseDTO = authenticationService.loginUser(body.getUsername(), body.getPassword());

        if(loginResponseDTO.isSuccess()){
            return new ResponseEntity<>(loginResponseDTO, HttpStatus.OK);
        }
        else return new ResponseEntity<>(loginResponseDTO, HttpStatus.BAD_REQUEST);
    }
}
