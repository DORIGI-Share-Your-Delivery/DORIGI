package dorigi.backend.service;

import dorigi.backend.domain.UserInfo;
import dorigi.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private final UserRepository userRepository;

    public List<UserInfo> findAllUsers() {
        return userRepository.findAll();
    }

}
