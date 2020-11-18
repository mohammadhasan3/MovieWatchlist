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
      watchMovie: action,
      unWatchMovie: action,
    });
  }
  watchMovie = (movieId) => {
    const removedMovie = this.watchlist.find((movie) => movie.id === movieId);
    this.watchlist = this.watchlist.filter((movie) => movie.id !== movieId);
    this.watched.push(removedMovie);
  };

  unWatchMovie = (movieId) => {
    const removedMovie = this.watched.find((movie) => movie.id === movieId);
    this.watched = this.watched.filter((movie) => movie.id !== movieId);
    this.watchlist.push(removedMovie);
  };
}
const movieStore = new MovieStore();
export default movieStore;
