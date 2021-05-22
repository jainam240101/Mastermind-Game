/** @format */

import React, { useState, useEffect } from "react";
import { colors } from "../Constants/Colors";
import classes from "./Board.module.css";
import check from "../../Assets/Correct.svg";
import incorrect from "../../Assets/Incorrect.png";

const Board = ({ activeColor, active, index, submitColor, pegValues }) => {
  const [colorCoding, setcolorCoding] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [showCheck, setshowCheck] = useState(false);
  useEffect(() => {
    if (
      colorCoding[1] !== null &&
      colorCoding[2] !== null &&
      colorCoding[3] !== null &&
      colorCoding[4] !== null
    ) {
      setshowCheck(true);
    }
  }, [colorCoding]);
  const changeColor = (id) => {
    const value = { ...colorCoding };
    value[id] = colors[activeColor];
    setcolorCoding(value);
  };
  const submit = () => {
    setshowCheck(false);
    submitColor(index, colorCoding);
  };
  return (
    <div
      className={
        active
          ? [classes.Container, classes.active].join(" ")
          : classes.Container
      }>
      <div className={classes.ColorCoding}>
        <div
          style={
            colorCoding[1] !== null ? { backgroundColor: colorCoding[1] } : null
          }
          onClick={() => changeColor(1)}
          className={classes.circle}></div>
        <div
          onClick={() => changeColor(2)}
          style={
            colorCoding[2] !== null ? { backgroundColor: colorCoding[2] } : null
          }
          className={classes.circle}></div>
        <div
          onClick={() => changeColor(3)}
          style={
            colorCoding[3] !== null ? { backgroundColor: colorCoding[3] } : null
          }
          className={classes.circle}></div>
        <div
          onClick={() => changeColor(4)}
          style={
            colorCoding[4] !== null ? { backgroundColor: colorCoding[4] } : null
          }
          className={classes.circle}></div>
      </div>
      {showCheck && (
        <div className={classes.Check}>
          <img
            onClick={submit}
            style={{ cursor: "pointer" }}
            src={check}
            alt='Tick'
          />
        </div>
      )}
      {pegValues !== undefined ? (
        <>
          <div className={classes.pegs}>
            {pegValues.map((element, index) => (
              <>
                {element === "White" && (
                  <div key={index} className={classes.smallCircle}></div>
                )}
                {element === "black" && (
                  <div
                    key={index}
                    style={{ backgroundColor: "black" }}
                    className={classes.smallCircle}></div>
                )}
                {element === "No Peg" && (
                  <div key={index} className={classes.flex}>
                    <img
                      className={classes.img}
                      src={incorrect}
                      alt='Incorrect'
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </>
      ) : (
        <div className={classes.pegs}>
          <div className={classes.smallCircle}></div>
          <div className={classes.smallCircle}></div>
          <div className={classes.smallCircle}></div>
          <div className={classes.smallCircle}></div>
        </div>
      )}
    </div>
  );
};

export default Board;
