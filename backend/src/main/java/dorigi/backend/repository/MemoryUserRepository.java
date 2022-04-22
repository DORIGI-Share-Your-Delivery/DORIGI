package dorigi.backend.repository;

import dorigi.backend.domain.User;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemoryUserRepository implements UserRepository{

    private static Long sequence = 0L;
    private static Map<Long , User> userList = new HashMap<>();

    @Override
    public User save(User user) {
        user.setUser_id(++sequence);
        userList.put(sequence , user);
        return user;
    }

    @Override
    public Optional<User> findByUId(Long id) {
        return Optional.ofNullable(userList.get(id));
    }

    @Override
    public Optional<User> findById(String id) {
        return userList.values().stream()
                .filter(user -> user.getId().equals(id))
                .findAny();
    }

    @Override
    public Optional<User> findByNickName(String nickname) {
        return userList.values().stream()
                .filter(user -> user.getNickname().equals(nickname))
                .findAny();
    }

    @Override
    public List<User> findAll() {
        return new ArrayList<>(userList.values());
    }
}
