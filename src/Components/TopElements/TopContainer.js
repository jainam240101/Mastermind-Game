/** @format */

import React, { useState } from "react";
import classes from "./TopContainer.module.css";

const TopContainer = () => {
  const [rules, setrules] = useState(false);
  const rulesHandler = () => {
    const value = rules;
    setrules(!value);
  };
  return (
    <>
      <div>
        <span className={[classes.singleLetter, classes.yellow].join(" ")}>
          M
        </span>
        <span className={[classes.singleLetter, classes.red].join(" ")}>A</span>
        <span className={[classes.singleLetter, classes.green].join(" ")}>
          S
        </span>
        <span className={[classes.singleLetter, classes.lightBlue].join(" ")}>
          T
        </span>
        <span className={[classes.singleLetter, classes.teal].join(" ")}>
          E
        </span>
        <span className={[classes.singleLetter, classes.purple].join(" ")}>
          R
        </span>
        <span className={classes.multipleLetter}>MIND</span>
      </div>
      <div className={classes.RulesContainer}>
        {rules ? (
          <span onClick={rulesHandler} className={classes.rules}>
            Hide Rules
          </span>
        ) : (
          <span onClick={rulesHandler} className={classes.rules}>
            Show Rules
          </span>
        )}
        {rules && (
          <div className={classes.text}>
            Try to guess the pattern, in both order and color, within ten turns.
            After submitting a row, a small black peg is placed for each code
            peg from the guess which is correct in both color and position. A
            white peg indicates the existence of a correct color code peg placed
            in the wrong position. More info on{" "}
            <a
              style={{ textDecoration: "none", color: "#00d1c1" }}
              href='https://en.wikipedia.org/wiki/Mastermind_(board_game)'
              rel='noreferrer'
              target='_blank'>
              Wikipedia
            </a>
            .
          </div>
        )}
      </div>
    </>
  );
};

export default TopContainer;
