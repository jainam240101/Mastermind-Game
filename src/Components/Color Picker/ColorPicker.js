/** @format */

import classes from "./ColorPicker.module.css";
import React from "react";

const ColorPicker = ({ activeColor, changeColor }) => {
  return (
    <div className={classes.Container}>
      <div
        onClick={() => changeColor("yellow")}
        className={[
          classes.circle,
          classes.yellow,
          activeColor === "yellow" ? classes.active : "",
        ].join(" ")}></div>
      <div
        onClick={() => changeColor("red")}
        className={[
          classes.circle,
          classes.red,
          activeColor === "red" ? classes.active : "",
        ].join(" ")}></div>
      <div
        onClick={() => changeColor("green")}
        className={[
          classes.circle,
          classes.green,
          activeColor === "green" ? classes.active : "",
        ].join(" ")}></div>
      <div
        onClick={() => changeColor("lightBlue")}
        className={[
          classes.circle,
          classes.lightBlue,
          activeColor === "lightBlue" ? classes.active : "",
        ].join(" ")}></div>
      <div
        onClick={() => changeColor("teal")}
        className={[
          classes.circle,
          classes.teal,
          activeColor === "teal" ? classes.active : "",
        ].join(" ")}></div>
      <div
        onClick={() => changeColor("purple")}
        className={[
          classes.circle,
          classes.purple,
          activeColor === "purple" ? classes.active : "",
        ].join(" ")}></div>
    </div>
  );
};

export default ColorPicker;
