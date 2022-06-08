package dorigi.backend.repository;

import dorigi.backend.domain.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserInfo,Long> {

    List<UserInfo> findAll ();

    UserInfo findByUserId(int userId);//user id로 검색하면 결과는 항상 하나 -> 리스트아님
}
