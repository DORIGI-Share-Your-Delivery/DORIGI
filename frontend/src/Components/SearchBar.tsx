import React from "react";
import { Select, Typography } from "@mui/material";
import { Grid, Box, MenuItem, TextField, Button, styled } from "@mui/material";

const materialHeight: number = 55;

interface IsearchBarInterface {
    search: string | null;
    setSearch: React.Dispatch<React.SetStateAction<string | null>>;
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
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
});

function SuggestedKeyword({ search, setSearch }: ISuggestedKeyword) {
    return (
        <Box sx={{ width: 900 }}>
            <Typography margin={2} display="inline">
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
                        href={`search/all?value=${search}`} //둘중에 하나 선택해야 함
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
            sx={{ width: 100 }}
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

function SearchBar(props: IsearchBarInterface) {
    const search = props.search;
    const selected = props.selected;
    const setSearch = props.setSearch;
    const setSelected = props.setSelected;

    return (
        <Grid container direction="column" justifyContent="center">
            <Grid container direction="row" justifyContent="center">
                <SelectFiled selected={selected} setSelected={setSelected} />
                <SearchField search={search} setSearch={setSearch} />
                <SearchButton
                    variant="contained"
                    href={`search/${selected}/value=${search}`}
                >
                    검색
                </SearchButton>
            </Grid>
            <Grid container direction="row" justifyContent="center">
                <SuggestedKeyword search={search} setSearch={setSearch} />
            </Grid>
        </Grid>
    );
}

const Seggestions: string[] = ["떡볶이", "베스킨라빈스", "떡튀순"]; // 추천 검색어 정보 (배열로 API에서 받아올 것들)

export default SearchBar;
