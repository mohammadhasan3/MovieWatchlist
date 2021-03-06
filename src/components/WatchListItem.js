//Libraries
import { observer } from "mobx-react";

//Components
import WatchButton from "./buttons/WatchButton";
import DeleteButton from "./buttons/DeleteButton";

const WatchListItem = ({ movies }) => {
  return (
    <>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          {movies.name}
          <WatchButton movieId={movies.id} />
          <DeleteButton movieId={movies.id} />
        </button>
      </div>
    </>
  );
};

export default observer(WatchListItem);
