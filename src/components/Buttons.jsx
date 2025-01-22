import React from "react";
import "./style.css";
const Buttons = (props) => {
  const style = {
    backgroundColor: props.isHeld ? "lightgreen" : "white",
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
