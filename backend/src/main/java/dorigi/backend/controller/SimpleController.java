package dorigi.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SimpleController {
    @GetMapping("/")
    String test(Model model){
        model.addAttribute("data","김용민");
        return "home";
    }
}
