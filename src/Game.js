/** @format */

import { colors } from "./Components/Constants/Colors";

export const getColorCode = () => {
  const values = [];
  for (var i = 0; i < 4; i++) {
    var randomnumber = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    const color = Object.values(colors)[randomnumber];
    values.push(color);
  }
  return values;
};

function shuffle(array) {
  const value = array.sort(() => Math.random() - 0.5);
  return value;
}

export const getPegValues = (correctColorCode, userValue) => {
  const pegValues = [];
  userValue.map((element, index) => {
    // Black
    if (element === correctColorCode[index]) {
      pegValues.push("black");
    } else if (
      correctColorCode.includes(element) &&
      correctColorCode[index] !== element
    ) {
      pegValues.push("White");
    } else if (!correctColorCode.includes(element)) {
      pegValues.push("No Peg");
    }
  });
  const shuffledValue = shuffle(pegValues);
  return shuffledValue;
};
