import React from "react";
import "./style.css";
import Buttons from "./Buttons";
const Main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const btnElem = arr.map((elem) => <Buttons value={elem} />);
  return (
    <div className="container">
      <div className="dieContainer">{btnElem}</div>

      <button className="btnRoll">Roll Dice</button>
    </div>
  );
};

export default Main;
