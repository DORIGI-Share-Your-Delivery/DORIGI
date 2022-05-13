import React from "react";
import { Select, Typography } from "@mui/material";
import { Grid, Box, MenuItem, TextField, Button, styled } from "@mui/material";

// 검색창 제작 컴포넌트
// props : [search , setsearch] , [selected , setselected] , height
// 각각 텍스트필드에 입력된 값을 받는 state,
// 셀렉트 필드에 입력된 값을 받는 state,
// 뒷 배경의 높이를 설정하는 height 이다.

const materialHeight: number = 55;

interface IsearchBarInterface {
    search: string | null;
    setSearch: React.Dispatch<React.SetStateAction<string | null>>;
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
    height: number;
}

interface ISelectFiledInterface {
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ISearchFiledInterface {
    search: string | null;
    setSearch: React.Dispatch<React.SetStateAction<string | null>>;
}

interface ISuggestedKeyword {
    search: string | null;
    setSearch: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchButton = styled(Button)({
    height: materialHeight,
    width: 100,
    lineHeight: materialHeight,
});

const SearchTextField = styled(TextField)({
    width: 700,
    height: materialHeight,
    lineHeight: materialHeight,
    backgroundColor: "white",
});

function SuggestedKeyword({ search, setSearch }: ISuggestedKeyword) {
    const url =
        search === ""
            ? `search/all/${search}`
            : `http://localhost:3000/search/all/${search}`;

    return (
        <Box style={{ width: "800px", textAlign: "left" }}>
            <Typography
                sx={{ fontSize: "16px" }}
                margin={2}
                display="inline"
                variant="h6"
            >
                지금 뜨는 검색어
            </Typography>
            {Seggestions.map((suggestions, i: number) => {
                return (
                    <Button
                        style={{ margin: "10px" }}
                        variant="contained"
                        key={i}
                        onClick={(e) => {
                            setSearch(suggestions);
                        }} //둘중에 하나 선택해야 함
                        href={url} //둘중에 하나 선택해야 함
                    >
                        {suggestions}
                    </Button>
                );
            })}
        </Box>
    );
}

function SelectFiled({ selected, setSelected }: ISelectFiledInterface) {
    return (
        <Select
            value={selected}
            onChange={(e) => {
                setSelected(e.target.value);
            }}
            sx={{ height: 55, width: 100, backgroundColor: "white" }}
        >
            <MenuItem value={"all"}>전체</MenuItem>
            <MenuItem value={"menu"}>메뉴</MenuItem>
            <MenuItem value={"restaurant"}>음식점</MenuItem>
            <MenuItem value={"posts"}>게시글</MenuItem>
        </Select>
    );
}

function SearchField({ search, setSearch }: ISearchFiledInterface) {
    return (
        <Box>
            <SearchTextField
                variant="outlined"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            ></SearchTextField>
        </Box>
    );
}

function SearchBar({
    search,
    selected,
    setSearch,
    setSelected,
    height,
}: IsearchBarInterface) {
    const url =
        selected === "all" && search === ""
            ? `search/${selected}/${search}`
            : `http://localhost:3000/search/${selected}/${search}`;

    const imageUrl =
        "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg";

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            sx={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Grid item width={1700} height={height / 2}></Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <SelectFiled selected={selected} setSelected={setSelected} />
                <SearchField search={search} setSearch={setSearch} />
                <SearchButton variant="contained" href={url}>
                    검색
                </SearchButton>
            </Grid>
            <Grid container direction="row" justifyContent="center">
                <SuggestedKeyword search={search} setSearch={setSearch} />
            </Grid>
            <Grid item height={height / 2}></Grid>
        </Grid>
    );
}

const Seggestions: string[] = ["떡볶이", "베스킨라빈스", "떡튀순"]; // 추천 검색어 정보 (배열로 API에서 받아올 것들)

export default SearchBar;
