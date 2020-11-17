import { observer } from "mobx-react";

const WatchListItem = ({ movies }) => {
  return (
    <>
      <h1>{movies.name}</h1>
    </>
  );
};

export default observer(WatchListItem);
