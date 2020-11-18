//Libraries
import { observer } from "mobx-react";

//Components
import UnWatchButton from "./buttons/UnWatchButton";
import DeleteButton from "./buttons/DeleteButton";

const WatchedItem = ({ movies }) => {
  return (
    <>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          {movies.name}
          <UnWatchButton movieId={movies.id} />
          <DeleteButton movieId={movies.id} />
        </button>
      </div>
    </>
  );
};

export default observer(WatchedItem);
