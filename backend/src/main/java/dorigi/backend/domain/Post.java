package dorigi.backend.domain;

import com.sun.istack.NotNull;
import org.springframework.data.annotation.Id;

import java.util.Date;

public class Post {

    @Id
    @NotNull
    int postNum;

    @NotNull
    String postName;

    @NotNull
    String postWriter;

    @NotNull
    Date postTime;

    @NotNull
    int status; // 0:임박 1:마감 2:normal

    //constructor
    public Post(int postNum, String postName, String postWriter, Date postTime) {
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

    public Date getPostTime() {
        return postTime;
    }

    public void setPostTime(Date postTime) {
        this.postTime = postTime;
    }
}
