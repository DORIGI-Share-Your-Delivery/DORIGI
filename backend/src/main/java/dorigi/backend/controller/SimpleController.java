package dorigi.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SimpleController {

    @GetMapping("/")
    public String test(){
        System.out.println("접속 확인");
        return "home";
    }
}
