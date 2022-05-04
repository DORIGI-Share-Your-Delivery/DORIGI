package dorigi.backend.service;

import dorigi.backend.domain.User;
import dorigi.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private final UserRepository userRepository;

    public Long signUp(User user){

        userRepository.save(user);

        return user.getUser_id();
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> findOne(Long UID){
        return userRepository.findByUId(UID);
    }

}
