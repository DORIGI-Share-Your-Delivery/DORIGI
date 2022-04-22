package dorigi.backend.controller;

import dorigi.backend.domain.User;
import dorigi.backend.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

@Controller
public class UserController {

    private final String url = "user";

    public UserController(UserService userService) {
        this.userService = userService;
    }

    private final UserService userService;

    @GetMapping(url + "")
    @ResponseBody
    public List<User> userList(){
        return userService.findAllUsers();
    }

    @GetMapping(url + "UID")
    @ResponseBody
    public Optional<User> findByUID(@RequestParam("UID") Long uid) {
        return userService.findOne(uid);
    }
}
