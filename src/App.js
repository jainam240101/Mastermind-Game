/** @format */

import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import Board from "./Components/Board/Board";
import ColorPicker from "./Components/Color Picker/ColorPicker";
import Modal from "./Components/Modal/Modal";
import TopContainer from "./Components/TopElements/TopContainer";
import { getColorCode, getPegValues } from "./Game";

const App = () => {
  const [activeColor, setactiveColor] = useState("yellow");
  const [Move, setMove] = useState(0);
  const [correctColorCode, setcorrectColorCode] = useState([]);
  const [colors, setcolors] = useState([...new Array(10)]);
  const [pegValues, setpegValues] = useState([...new Array(10)]);
  const [showModal, setshowModal] = useState(false);
  const [modalText, setmodalText] = useState({
    status: "",
    heading: "",
    text: "",
  });

  useEffect(() => {
    const value = getColorCode();
    // Uncomment below line to see what are the color codes that the computer has chosen
    // console.log(value);
    setcorrectColorCode(value);
  }, []);

  const changeColor = (value) => {
    setactiveColor(value);
  };

  const allEqual = (arr) => arr.every((v) => v === "black");

  const submitColor = (index, value) => {
    const newPegs = [...pegValues];
    const newSet = [...colors];
    const newMove = Move + 1;
    newSet[index] = Object.values(value);
    const answers = getPegValues(correctColorCode, newSet[index]);
    if (allEqual(answers)) {
      setshowModal(true);
      setmodalText({
        status: "Success",
        heading: "Congratulations!",
        text: "Congratulations! You Won",
      });
    }
    if (newMove === 10) {
      setshowModal(true);
      setmodalText({
        status: "Falied",
        heading: "Game Over!",
        text: "Game Over! Try again later",
      });
    }
    newPegs[index] = answers;
    setpegValues(newPegs);
    setcolors(newSet);
    setMove(newMove);
  };
  const closeModal = () => {
    window.location.reload();
  };
  return (
    <div className={classes.Container}>
      <TopContainer />
      <div className={classes.Board}>
        <div>
          {colors.map((element, index) => {
            if (index === Move) {
              return (
                <Board
                  active={true}
                  index={index}
                  submitColor={submitColor}
                  key={index}
                  activeColor={activeColor}
                  colors={element}
                />
              );
            } else {
              return (
                <Board
                  pegValues={pegValues[index]}
                  index={index}
                  active={false}
                  key={index}
                  colors={element}
                />
              );
            }
          })}
        </div>
        <ColorPicker activeColor={activeColor} changeColor={changeColor} />
      </div>
      {showModal && (
        <Modal
          closeModal={closeModal}
          status={modalText.status}
          heading={modalText.heading}
          text={modalText.text}
        />
      )}
    </div>
  );
};

export default App;
