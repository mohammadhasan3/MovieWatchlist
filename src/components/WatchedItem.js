import { observer } from "mobx-react";

const WatchedItem = ({ movies }) => {
  return (
    <>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action"
        >
          {movies.name}
        </button>
      </div>
    </>
  );
};

export default observer(WatchedItem);
