//Stores
import movieStore from "../stores/movieStore";

//Libraries
import { observer } from "mobx-react";
import { useState } from "react";

//Components
import WatchListItem from "./WatchListItem";
import WatchedItem from "./WatchedItem";

const MovieList = () => {
  const moviesList = movieStore.watchlist.map((movies) => (
    <WatchListItem movies={movies} key={movies.id} />
  ));

  const watchedList = movieStore.watched.map((movies) => (
    <WatchedItem movies={movies} key={movies.id} />
  ));
  return (
    <>
      <h1>{moviesList}</h1>

      <h2>{watchedList}</h2>
    </>
  );
};

export default observer(MovieList);
