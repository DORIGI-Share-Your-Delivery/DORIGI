package dorigi.backend.controller;

import dorigi.backend.domain.BoardsInfo;
import dorigi.backend.domain.UserInfo;
import dorigi.backend.service.BoardsService;
import dorigi.backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {

    private final BoardsService boardsService;

    public PostController(BoardsService boardsService) {
        this.boardsService = boardsService;
    }

    @GetMapping("/boards") // 상위 랭킹 정보를 가져옴
    public List<BoardsInfo> getAllPosts(){
        return boardsService.findAllPosts();
    }

}
