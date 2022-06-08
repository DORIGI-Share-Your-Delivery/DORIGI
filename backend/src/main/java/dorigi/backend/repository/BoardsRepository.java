package dorigi.backend.repository;

import dorigi.backend.domain.BoardsInfo;
import dorigi.backend.domain.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import java.util.List;

@Repository
public interface BoardsRepository extends JpaRepository<BoardsInfo,Long> {

    Page<BoardsInfo> findAll (Pageable pageable);

}
