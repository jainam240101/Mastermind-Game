/** @format */

import React from "react";
import Success from "../../Assets/Success.png";
import Incorrect from "../../Assets/Incorrect.png";
import classes from "./Modal.module.css";

const Modal = ({ status, heading, text, closeModal }) => {
  return (
    <div className={classes.Backdrop}>
      <div className={classes.Container}>
        {status === "Success" ? (
          <div className={classes.img}>
            <img src={Success} alt='Success' />
          </div>
        ) : (
          <div className={classes.img}>
            <img src={Incorrect} alt='Incorrect' />
          </div>
        )}
        <h3 className={classes.text}>{heading}</h3>
        <div className={classes.text}>{text}</div>
        <button onClick={closeModal} className={classes.btn}>
          Thank You
        </button>
      </div>
    </div>
  );
};

export default Modal;
