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

const MovieList = () => {
  const moviesList = movieStore.watchlist.map((movies) => (
    <WatchListItem movies={movies} key={movies.id} />
  ));

  const watchedList = movieStore.watched.map((movies) => (
    <WatchedItem movies={movies} key={movies.id} />
  ));

  const [query, setQuery] = useState("");

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <AddBar setQuery={setQuery}></AddBar>
            <AddButton movieName={query}>Add</AddButton>
            {console.log(query)}
            <h4>Movies to watch:</h4>
            {moviesList}
          </div>
          <div className="col-sm">
            <h4>Watched Movies:</h4>
            {watchedList}
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(MovieList);
