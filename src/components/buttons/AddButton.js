//Stores
import movieStore from "../../stores/movieStore";

//Styles
import { AddButtonStyled } from "../../styles";

const AddButton = ({ movieName }) => {
  return (
    <>
      <AddButtonStyled onClick={() => movieStore.addMovie(movieName)}>
        Add
      </AddButtonStyled>
    </>
  );
};

export default AddButton;
