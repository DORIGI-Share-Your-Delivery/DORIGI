package dorigi.backend.domain;

public class User {

    Long user_id;
    String id;
    String password;
    String nickname;
    String email;
    String phone_number;
    String distance_range;
    boolean gender;
    String profile_img;

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
