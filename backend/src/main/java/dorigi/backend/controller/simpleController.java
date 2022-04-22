package dorigi.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class simpleController {

    @GetMapping("/")
    public String home (){
        System.out.println("접속확인");
        return "home";
    }
}
