"use strict";

const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screen");

let allSighs = [];
let accumalitiveCalculation;

const calculate = function (button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    allSighs = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumalitiveCalculation);
  } else {
    allSighs.push(value);
    accumalitiveCalculation = allSighs.join("");
    screenDisplay.textContent = accumalitiveCalculation;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
