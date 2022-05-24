import "../App.css";

import SearchBar from "../Components/SearchBar";
import RestaurantBox from "../Components/RestaurantBox";
import KaKaoMap from "../Components/KakoMap";

import { Grid, Typography, styled, Button } from "@mui/material";
import { useState } from "react";

interface Restaurant {
    name: string;
    address: string;
    pNumber: string;
    img: string;
}

const SubTitle = styled(Typography)({
    display: "inline",
    fontSize: "24px",
    color: "dimgray",
    marginLeft: "20px",
});

function SimpleTitle({
    loc,
    url,
    content,
}: {
    loc: string;
    url: string;
    content: string;
}) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={3}
        >
            <Grid item>
                <Typography display="inline" variant="h4">
                    {`${loc}`}
                </Typography>
                <SubTitle>{`${content}`}</SubTitle>
            </Grid>
            <Grid item>
                <Button variant="text" sx={{ color: "dimgray" }} href={url}>
                    더보기
                </Button>
            </Grid>
        </Grid>
    );
}

function Test({ loc }: { loc: string }) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            marginTop={1}
            marginBottom={1}
        >
            <Grid item xs={7}>
                <Grid container direction="column">
                    <Grid item>
                        <SimpleTitle loc={loc} url={""} content="맛집 지도" />
                    </Grid>
                    <Grid item>
                        <KaKaoMap />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction="column">
                    <Grid item>
                        <SimpleTitle loc="" url={""} content="참여중인 채팅" />
                    </Grid>
                    <Grid item>
                        <div
                            style={{
                                width: "100%",
                                height: "500px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

function PostCards({ loc }: { loc: string }) {
    const url = `http://localhost:3000/search/restaurant/${loc}`;
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            marginTop="10px"
        >
            <Grid item xs={12}>
                <SimpleTitle url={url} loc={loc} content="새로운 게시글" />
            </Grid>
            <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={10}
                    marginBottom={2}
                >
                    {restaurantList.map((e, i: number) => {
                        return (
                            <Grid item key={i}>
                                <RestaurantBox restaurant={e} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default function Main() {
    const [select, setSelect] = useState<string | null>("all");
    const [search, setSearch] = useState<string | null>("");
    const loc = "성남시";

    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item>
                <SearchBar
                    selected={select}
                    search={search}
                    setSearch={setSearch}
                    setSelected={setSelect}
                    height={500}
                ></SearchBar>
            </Grid>
            <Grid item xs={11} marginLeft={1}>
                <PostCards loc={loc} />
                <hr />
            </Grid>
            <Grid item xs={11} marginLeft={1}>
                <Test loc={loc} />
            </Grid>
        </Grid>
    );
}

const restaurantList: Restaurant[] = [
    {
        name: "helloo",
        address: "helloo",
        pNumber: "helloo",
        img: "helloo",
    },
    {
        name: "helloo",
        address: "helloo",
        pNumber: "helloo",
        img: "helloo",
    },
    {
        name: "helloo",
        address: "helloo",
        pNumber: "helloo",
        img: "helloo",
    },
];
