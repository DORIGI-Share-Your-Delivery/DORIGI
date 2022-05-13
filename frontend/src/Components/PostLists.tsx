import { Grid, Box } from "@mui/material";

// 검색한 포스팅들을 띄워주는 컴포넌트
// props : Post[]

interface Post {
    postNum: number;
    postName: string;
    postWriter: string;
    postTime: string;
    postViews: number;
}

interface IpostListsinterface {
    posts: Post[];
}

function PostLists({ posts }: IpostListsinterface) {
    const url = "http://localhost:3000/post/";

    return (
        <Box sx={{ width: "1000px" }}>
            {posts.map((post, i: number) => {
                return (
                    <div key={i}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"
                        >
                            <Grid item xs={1} textAlign="center">
                                {post.postNum}
                            </Grid>
                            <Grid item xs textAlign="center">
                                <a
                                    href={url + post.postNum}
                                    style={{ textDecoration: "none" }}
                                >
                                    {post.postName}
                                </a>
                            </Grid>
                            <Grid item xs={1} textAlign="center">
                                {post.postWriter}
                            </Grid>
                            <Grid item xs={1} textAlign="center">
                                {post.postTime}
                            </Grid>
                            <Grid item xs={1} textAlign="center">
                                {post.postViews}
                            </Grid>
                        </Grid>
                        <hr />
                    </div>
                );
            })}
        </Box>
    );
}

export default PostLists;
