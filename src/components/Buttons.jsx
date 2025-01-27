import React from "react";
import "./style.css";
const Buttons = (props) => {
  const style = {
    backgroundColor: props.isHeld ? "lightgreen" : "white",
    color: props.isHeld ? "black" : "black",
    border: props.isHeld ? "2px solid black" : "none",
  };
  return (
    <div>
      <button style={style} onClick={(e) => props.onHold(props.id)}>
        {props.value}
      </button>
    </div>
  );
};

export default Buttons;
