package dorigi.backend.domain;

import com.sun.istack.NotNull;
import org.springframework.data.annotation.Id;

public class Post {

    @Id
    @NotNull
    int postNum;

    @NotNull
    String postName;

    @NotNull
    String postWriter;

    @NotNull
    String postTime;

    @NotNull
    int status; // 0:임박 1:마감 2:normal

    //constructor
    public Post(int postNum, String postName, String postWriter, String postTime) {
        this.postNum = postNum;
        this.postName = postName;
        this.postWriter = postWriter;
        this.postTime = postTime;
    }


    //getter & setter
    public int getPostNum() {
        return postNum;
    }

    public void setPostNum(int postNum) {
        this.postNum = postNum;
    }

    public String getPostName() {
        return postName;
    }

    public void setPostName(String postName) {
        this.postName = postName;
    }

    public String getPostWriter() {
        return postWriter;
    }

    public void setPostWriter(String postWriter) {
        this.postWriter = postWriter;
    }

    public String getPostTime() {
        return postTime;
    }

    public void setPostTime(String postTime) {
        this.postTime = postTime;
    }
}
