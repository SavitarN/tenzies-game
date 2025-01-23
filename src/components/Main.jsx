import React from "react";
import "./style.css";
import Buttons from "./Buttons";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const Main = () => {
  const [button, setButton] = React.useState(() => buttonElements());
  const [status, setStatus] = React.useState(false);

  //funciton for generating object that holds the dice element essential property//
  function buttonElements() {
    const arr = [];
    for (let i = 0; i <= 9; i++) {
      const randomNumber = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };

      arr.push(randomNumber);
    }
    return arr;
  }

  //function to hold the dice
  function hold(id) {
    setButton((prevArr) =>
      prevArr.map((elem) =>
        elem.id === id ? { ...prevArr, isHeld: !elem.isHeld } : elem
      )
    );
  }

  //to check game won condition based on state value//

  const gameWon =
    button.every((elem) => elem.isHeld) &&
    button.every((elem) => die.value === button[0].value);
  //function for roll dice when we hold our numbers//

  function handleRoll() {
    setButton((buttons) =>
      buttons.map((elem) =>
        elem.isHeld ? elem : { ...elem, value: Math.ceil(Math.random() * 6) }
      )
    );
  }
  const btnElem = button.map((elem) => (
    <Buttons
      value={elem.value}
      isHeld={elem.isHeld}
      key={elem.id}
      id={elem.id}
      onHold={hold}
    />
  ));
  return (
    <div className="container">
      {gameWon && <Confetti />}
      <div className="dieContainer">{btnElem}</div>

      <button className="btnRoll" onClick={handleRoll}>
        {gameWon ? "New Game" : "Roll Dice"}
      </button>
    </div>
  );
};

export default Main;
