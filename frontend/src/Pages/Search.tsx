import { Button, Grid, Typography, styled } from "@mui/material";
import SearchBar from "../Components/SearchBar";
import RestaurantBox from "../Components/RestaurantBox";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SubTitle = styled(Typography)({
    display: "inline",
    fontSize: "24px",
    color: "dimgray",
    marginLeft: "20px",
});

interface Restaurant {
    name: string;
    address: string;
    pNumber: string;
    img: string;
}

interface ISearcTitleinterface {
    selected: string | null;
    search: string | null;
    values: any;
}

function SearchRestaurantTitle({
    selected,
    search,
    values,
}: ISearcTitleinterface) {
    const url =
        selected === "all" && search === ""
            ? `search/restaurant/${search}`
            : `http://localhost:3000/search/restaurant/${search}`;

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
                    "{values.searchValue}"
                </Typography>
                <SubTitle>관련 음식점</SubTitle>
            </Grid>
            <Grid item>
                <Button variant="text" sx={{ color: "dimgray" }} href={url}>
                    더보기
                </Button>
            </Grid>
        </Grid>
    );
}

function SearchPostsTitle({ selected, search, values }: ISearcTitleinterface) {
    const url =
        selected === "all" && search === ""
            ? `search/posts/${search}`
            : `http://localhost:3000/search/posts/${search}`;

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
                    "{values.searchValue}"
                </Typography>
                <SubTitle>관련 게시글</SubTitle>
            </Grid>
            <Grid item>
                <Button variant="text" sx={{ color: "dimgray" }} href={url}>
                    더보기
                </Button>
            </Grid>
        </Grid>
    );
}

function PostLists() {
    return;
}

function RestaurantCard() {
    return (
        <Grid container spacing={4} direction="row">
            {restaurantList.map((restaurant, i: number) => {
                return (
                    <Grid key={i} item>
                        <RestaurantBox restaurant={restaurant} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

function Search() {
    const [selected, setSelected] = useState<string | null>("all");
    const [search, setSearch] = useState<string | null>("");
    const values = useParams();

    useEffect(() => {
        if (values.searchValue != null) setSearch(values.searchValue);
        if (values.selectedValue != null) setSelected(values.selectedValue);
    }, []);

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Grid item>
                <SearchBar
                    selected={selected}
                    setSelected={setSelected}
                    search={search}
                    setSearch={setSearch}
                />
            </Grid>
            <Grid item>
                <SearchPostsTitle
                    search={search}
                    selected={selected}
                    values={values}
                />
            </Grid>
            <Grid item>
                <SearchRestaurantTitle
                    search={search}
                    selected={selected}
                    values={values}
                />
                <RestaurantCard />
            </Grid>
        </Grid>
    );
}

const restaurantList: Restaurant[] = [
    {
        name: "엽기 떡볶이 광흥창점 4.8",
        address: "서울 마포구 창전동 309 1층 3호",
        pNumber: "050-7982-4595",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/02/86/7d/2016-12-27-20-56-20-largejpg_rotated_270.jpg",
    },
    {
        name: "고기먹고싶어 이화여대점",
        address: "서울 마포구 창전동 309 1층 3호",
        pNumber: "050-7982-4595",
        img: "https://img.huffingtonpost.com/asset/5bf24ac824000060045835ff.jpeg?ops=1778_1000",
    },
    {
        name: "커피빈 신촌점 4.8",
        address: "서울 마포구 창전동 309 1층 3호",
        pNumber: "050-7982-4595",
        img: "https://www.mirae-biz.com/news/photo/201711/35236_28789_1052.jpg",
    },
];

export default Search;
