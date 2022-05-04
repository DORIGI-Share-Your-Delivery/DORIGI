package dorigi.backend.repository;

import dorigi.backend.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository {

    User save (User user);
    Optional<User> findByUId (Long id);
    Optional<User> findById (String id);
    Optional<User> findByNickName(String nickname);
    List<User> findAll ();
}
