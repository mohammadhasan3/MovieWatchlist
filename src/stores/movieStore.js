//Data
import watchlist from "../watchlist";

//Libraries
import { action, makeObservable, observable } from "mobx";
import slugify from "react-slugify";

class MovieStore {
  watchlist = watchlist;

  constructor() {
    makeObservable(this, {
      watchlist: observable,
    });
  }
}

const movieStore = new MovieStore();
export default movieStore;
