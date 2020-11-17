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
}

const movieStore = new MovieStore();
export default movieStore;
