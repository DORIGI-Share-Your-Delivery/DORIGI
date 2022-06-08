package dorigi.backend.service;

import dorigi.backend.domain.BoardsInfo;
import dorigi.backend.domain.Post;
import dorigi.backend.domain.UserInfo;
import dorigi.backend.repository.BoardsRepository;
import dorigi.backend.repository.UserRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardsService {

    private final BoardsRepository boardsRepository;
    private final UserRepository userRepository;

    public BoardsService(BoardsRepository boardsRepository, UserRepository userRepository) {
        this.boardsRepository = boardsRepository;
        this.userRepository = userRepository;
    }


    //전체조회
    public List<BoardsInfo> findAllPosts(Pageable pageable) {
        return boardsRepository.findAll(pageable).getContent();
    }

    //전체 조회후 프론트에서 요청한 형식으로 내보내기
    public List<Post> findPosts(Pageable pageable){
        List<BoardsInfo> posts = findAllPosts(pageable);//전체조회
        List<Post> res = new ArrayList<>();

        for (BoardsInfo b : posts) {
            String user_nick = userRepository.findByUserId(b.getUserId()).getNickname();//닉네임 찾기
            Post p = new Post(b.getBoardId(),b.getTitle(),user_nick,b.getRegDate());
            res.add(p);
        }
        return res;
    }

}
