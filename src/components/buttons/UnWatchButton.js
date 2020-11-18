//Stores
import movieStore from "../../stores/movieStore";

//Styles
import { UnWatchButtonStyled } from "../../styles";

const UnWatchButton = ({ movieId }) => {
  return (
    <>
      <UnWatchButtonStyled onClick={() => movieStore.unWatchMovie(movieId)}>
        UnWatch
      </UnWatchButtonStyled>
    </>
  );
};

export default UnWatchButton;
