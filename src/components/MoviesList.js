//Stores
import movieStore from "../stores/movieStore";

//Libraries
import { observer } from "mobx-react";
import { useState } from "react";

//Components
import WatchListItem from "./WatchListItem";
import WatchedItem from "./WatchedItem";
import AddBar from "./AddBar";
import AddButton from "./buttons/AddButton";
import { SearchBar, SearchBar2 } from "./SearchBar";

const MovieList = () => {
  let moviesList = movieStore.watchlist.map((movies) => (
    <WatchListItem movies={movies} key={movies.id} />
  ));
  let watchedList = movieStore.watched.map((movies) => (
    <WatchedItem movies={movies} key={movies.id} />
  ));
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [watched, setWatched] = useState("");

  const filteredMoviesList = movieStore.watchlist.filter((movies) =>
    movies.name.toLowerCase().includes(search.toLowerCase())
  );
  moviesList = filteredMoviesList.map((movies) => (
    <WatchListItem movies={movies} key={movies.id} />
  ));

  const filteredWatched = movieStore.watched.filter((movies) =>
    movies.name.toLowerCase().includes(watched.toLowerCase())
  );
  watchedList = filteredWatched.map((movies) => (
    <WatchedItem movies={movies} key={movies.id} />
  ));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <AddBar setQuery={setQuery}></AddBar>
            <AddButton movieName={query}>Add</AddButton>
            {console.log(query)}

            <h4>Movies to watch:</h4>
            <SearchBar setSearch={setSearch} />
            {moviesList}
          </div>
          <div className="col-sm">
            <h4>Watched Movies:</h4>
            <SearchBar2 setWatched={setWatched} />
            {watchedList}
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(MovieList);
