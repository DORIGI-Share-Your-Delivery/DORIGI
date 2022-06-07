package dorigi.backend.domain;

import com.sun.istack.NotNull;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@Entity
@Table(name = "boards")
public class BoardsInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //JPA 사용시 필요
    @Column(name = "board_id")
    private String boardId;

    private String content;

    @NotNull
    @Column(name = "user_id")
    private int userId;

    @NotNull
    @Column(name = "rest_id")
    private int restId;

    @Column(name = "target_price")
    private int targetPrice;

    @Column(name = "target_personel")
    private int targetPersonel;

    @Column(name = "is_ended")
    private boolean isEnd;

    @NotNull
    private String title;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "reg_date")
    Date regDate;

    @Temporal(TemporalType.TIMESTAMP)
    Date deadline;

    public String getBoardId() {
        return boardId;
    }

    public void setBoardId(String boardId) {
        this.boardId = boardId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getRestId() {
        return restId;
    }

    public void setRestId(int restId) {
        this.restId = restId;
    }

    public int getTargetPrice() {
        return targetPrice;
    }

    public void setTargetPrice(int targetPrice) {
        this.targetPrice = targetPrice;
    }

    public int getTargetPersonel() {
        return targetPersonel;
    }

    public void setTargetPersonel(int targetPersonel) {
        this.targetPersonel = targetPersonel;
    }

    public boolean isEnd() {
        return isEnd;
    }

    public void setEnd(boolean end) {
        isEnd = end;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

//    board_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
//    content text COLLATE pg_catalog."default",
//    user_id integer NOT NULL,
//    rest_id integer NOT NULL,
//    target_price integer NOT NULL,
//    target_personel integer NOT NULL,
//    reg_date timestamp without time zone NOT NULL,
//    deadline timestamp without time zone,
//    is_ended boolean NOT NULL,
//    title character varying COLLATE pg_catalog."default" NOT NULL,
}
