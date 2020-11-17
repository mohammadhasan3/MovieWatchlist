import { observer } from "mobx-react";

const WatchedItem = ({ movies }) => {
  return (
    <>
      <h1>{movies.name}</h1>
    </>
  );
};

export default observer(WatchedItem);
