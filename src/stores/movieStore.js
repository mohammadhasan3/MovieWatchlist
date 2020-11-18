//Data
import { watchlist, watched } from "../watchlist";

//Libraries
import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";

class MovieStore {
  watchlist = watchlist;
  watched = watched;

  constructor() {
    makeObservable(this, {
      watchlist: observable,
      watched: observable,
    });
  }
  watchMovie = (movieId) => {
    const removedMovie = this.watchlist.find((movie) => movie.id === movieId);
    this.watchlist = this.watchlist.filter((movie) => movie.id !== movieId);
    this.watched.push(removedMovie);
  };
}

const movieStore = new MovieStore();
export default movieStore;
