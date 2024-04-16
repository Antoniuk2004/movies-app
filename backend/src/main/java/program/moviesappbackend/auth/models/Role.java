package program.moviesappbackend.auth.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Getter
@Setter
@AllArgsConstructor
public class Role implements GrantedAuthority {
    private int roleId;
    private String authority;
}
