import React from "react";
import "./style.css";
const Buttons = (props) => {
  return (
    <div>
      <button>{props.value}</button>
    </div>
  );
};

export default Buttons;
