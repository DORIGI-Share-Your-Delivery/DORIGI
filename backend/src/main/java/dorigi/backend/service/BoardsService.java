package dorigi.backend.service;

import dorigi.backend.domain.BoardsInfo;
import dorigi.backend.domain.UserInfo;
import dorigi.backend.repository.BoardsRepository;
import dorigi.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardsService {

    public BoardsService(BoardsRepository boardsRepository) {
        this.boardsRepository = boardsRepository;
    }

    private final BoardsRepository boardsRepository;

    public List<BoardsInfo> findAllPosts() {
        return boardsRepository.findAll();
    }

}
