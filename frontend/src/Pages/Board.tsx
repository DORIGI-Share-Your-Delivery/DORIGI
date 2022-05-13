import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import PostLists from "../Components/PostLists";
import { useParams } from "react-router-dom";
import { Grid, Box, Typography, styled, Button, Stack } from "@mui/material";

interface Post {
    postNum: number;
    postName: string;
    postWriter: string;
    postTime: string;
    postViews: number;
}

function ResultTitle({ title }: { title: string | null }) {
    const SubTitle = styled(Typography)({
        display: "inline",
        fontSize: "24px",
        color: "dimgray",
        marginLeft: "20px",
    });

    return (
        <Box sx={{ width: "900px" }}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                margin={3}
            >
                <Grid item>
                    <Typography display="inline" variant="h3">
                        "{title}"
                    </Typography>
                    <SubTitle sx={{ fontSize: "36px" }}>게시글</SubTitle>
                </Grid>
            </Grid>
        </Box>
    );
}

function AddClass() {
    const height: number = 55;
    const CategoryBtn = styled(Button)({
        display: "inline",
        width: 100,
    });

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={1}
            sx={{
                width: 1000,
                height: height,
                borderRadius: "10px",
                backgroundColor: "gray",
            }}
        >
            <Grid item marginLeft={1} xs={1} sx={{ height: height - 4 }}>
                <Typography variant="h6">분류</Typography>
            </Grid>
            <Grid item xs={10} sx={{ height: height }}>
                <Stack direction="row" spacing={3}>
                    {categories.map((value, i: number) => {
                        return (
                            <CategoryBtn variant="contained" key={i}>
                                {value}
                            </CategoryBtn>
                        );
                    })}
                </Stack>
            </Grid>
        </Grid>
    );
}

function Board() {
    const [selected, setSelected] = useState<string | null>("all");
    const [search, setSearch] = useState<string | null>("");

    const title: string | null = "신촌동";

    return (
        <Grid container justifyContent="center" spacing={10}>
            <Grid item>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    selected={selected}
                    setSelected={setSelected}
                    height={150}
                />
            </Grid>
            <Grid item>
                <ResultTitle title={title} />
                <AddClass />
                <PostLists posts={posts} />
            </Grid>
        </Grid>
    );
}

const posts: Post[] = [
    {
        postNum: 123,
        postName: "hello",
        postWriter: "ryokuman",
        postTime: "11:12",
        postViews: 1,
    },
];

const categories: string[] = ["#일식", "#중식", "#양식", "#한식"];

export default Board;
