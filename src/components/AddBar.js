import { React } from "react";

//Styling
import { AddBarStyled } from "../styles";

const AddBar = (props) => {
  return (
    <>
      <AddBarStyled
        placeholder="Type Movie's Name..."
        onChange={(event) => props.setQuery(event.target.value)}
      ></AddBarStyled>
    </>
  );
};

export default AddBar;
