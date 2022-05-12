import React from "react";
import { Grid, Box, Select, MenuItem } from "@mui/material";
import { useState } from "react";

interface StateInterface {
    searchValue: string | null;
    setSearchValue: React.Dispatch<React.SetStateAction<string | null>>;
    selectedValue: string | null;
    setSelectedValue: React.Dispatch<React.SetStateAction<string | null>>;
}

function SuggestedKeyword() {}

function SearchField({
    searchValue,
    setSearchValue,
    selectedValue,
    setSelectedValue,
}: StateInterface) {
    return (
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        label="Age"
                        value={searchValue}
                        onChange={(event) => {
                            setSelectedValue(event.target.value);
                            console.log(selectedValue);
                        }}
                    >
                        <MenuItem>전체</MenuItem>
                        <MenuItem>메뉴</MenuItem>
                        <MenuItem>음식점</MenuItem>
                        <MenuItem>게시글</MenuItem>
                    </Select>
                </Grid>
                <Grid item></Grid>
            </Grid>
        </Box>
    );
}

function SearchBar() {
    const [selectedValue, setSelectedValue] = useState<string | null>("");
    const [searchValue, setSearchValue] = useState<string | null>("");

    return (
        <div>
            <SearchField
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
        </div>
    );
}

export default SearchBar;
