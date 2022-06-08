package dorigi.backend.controller;

import dorigi.backend.domain.BoardsInfo;
import dorigi.backend.domain.Post;
import dorigi.backend.domain.UserInfo;
import dorigi.backend.service.BoardsService;
import dorigi.backend.service.UserService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {

    private final BoardsService boardsService;

    public PostController(BoardsService boardsService) {
        this.boardsService = boardsService;
    }

    @GetMapping("/boards") // 상위 랭킹 정보를 가져옴
    public List<Post> getAllPosts(@RequestParam(value="pageNum", required = false, defaultValue = "1")Integer pageNum){

        Pageable paging = PageRequest.of(pageNum-1,15, Sort.by("regDate")); //page 0부터임!

        return boardsService.findPosts(paging);
    }

}
