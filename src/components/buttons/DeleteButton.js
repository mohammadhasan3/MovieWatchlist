//Stores
import movieStore from "../../stores/movieStore";

//Styles
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ movieId }) => {
  return (
    <DeleteButtonStyled onClick={() => movieStore.deleteMovie(movieId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
