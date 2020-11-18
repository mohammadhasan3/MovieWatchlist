import React from "react";
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for movie "
      onChange={(event) => props.setSearch(event.target.value)}
    />
  );
};
const SearchBar2 = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for movie "
      onChange={(event) => props.setWatched(event.target.value)}
    />
  );
};

export { SearchBar, SearchBar2 };
