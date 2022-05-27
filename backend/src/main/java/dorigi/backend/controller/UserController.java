package dorigi.backend.controller;

import dorigi.backend.domain.UserInfo;
import dorigi.backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

// Circular path error
// https://stackoverflow.com/questions/18813615/how-to-avoid-the-circular-view-path-exception-with-spring-mvc-test
@RestController
public class UserController {

    public UserController(UserService userService) {
        this.userService = userService;
    }

    private final UserService userService;

    @GetMapping ("/userinfo") // 상위 랭킹 정보를 가져옴
    public List<UserInfo> getAllUsers(){
        return userService.findAllUsers();
    }
}
