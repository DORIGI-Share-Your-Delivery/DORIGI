import {} from "@mui/material";
import SearchBar from "../Components/SearchBar";
import RestaurantBox from "../Components/RestaurantBox";
import { useState } from "react";

function Search() {
    const [selected, setSelected] = useState<string | null>("all");
    const [search, setSearch] = useState<string | null>("");

    return (
        <div>
            <SearchBar
                selected={selected}
                setSelected={setSelected}
                search={search}
                setSearch={setSearch}
            />
            <RestaurantBox />
        </div>
    );
}

export default Search;
