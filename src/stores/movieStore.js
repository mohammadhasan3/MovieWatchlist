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
      deleteMovie: action,
      addMovie: action,
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

  deleteMovie = (movieId) => {
    this.watchlist = this.watchlist.filter((movie) => movie.id !== movieId);
    this.watched = this.watched.filter((movie) => movie.id !== movieId);
  };

  addMovie = (movieName) => {
    const newMovie = {
      name: "",
      id: 0,
      slug: "",
    };
    newMovie.name = movieName;
    newMovie.id = this.watchlist.length + this.watched.length + 1;
    newMovie.slug = slugify(newMovie.name);
    this.watchlist.push(newMovie);
    console.log(newMovie);
  };
}
const movieStore = new MovieStore();
export default movieStore;
