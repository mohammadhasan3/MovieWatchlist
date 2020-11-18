//Stores
import movieStore from "../../stores/movieStore";

//Styles
import { WatchButtonStyled } from "../../styles";

const WatchButton = ({ movieId }) => {
  return (
    <>
      <WatchButtonStyled onClick={() => movieStore.watchMovie(movieId)}>
        Watch
      </WatchButtonStyled>
    </>
  );
};

export default WatchButton;
