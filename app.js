const displayElem = document.querySelector(".display");
// console.log(displayElem);
const buttons = document.querySelectorAll(".btn");
// all these buttons are in a node list,
// converting it to an array to use array methods on it
const buttonsArray = Array.from(buttons);
console.log(buttonsArray);
let displayValue = "";
let operators = ["+", "-", "*", "/"];
let lastInputOperator = "";

const displayResult = (value) => {
  displayElem.textContent = value ? value : "0.00";
};

const calculateResult = (expression) => {
  let result;
  try {
    expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
    result = Function(`"use strict"; return (${expression})`)();
    return parseFloat(result.toFixed(2)).toString();
  } catch (error) {
    displayResult("Error");
  }
};

buttonsArray.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    // console.log(buttonValue);
    if (buttonValue === "AC") {
      displayValue = "";
      displayResult(displayValue);
      return;
    }
    if (buttonValue === "C") {
      displayValue = displayValue.slice(0, -1);
      console.log(displayValue);
      displayResult(displayValue);
      return;
    }

    // If the button is an operator,
    // check if the last character in the display is also an operator
    // If it is, replace the last operator with the new one
    // This allows users to change their operator choice without having to clear the entire display
    if (operators.includes(buttonValue)) {
      let lastChar = displayValue[displayValue.length - 1];
      console.log("Display value:", displayValue);
      console.log("Last character:", lastChar);

      if (operators.includes(lastChar)) {
        displayValue = displayValue.slice(0, -1);
      }
      lastInputOperator = buttonValue;
      displayValue += buttonValue;
      console.log(displayValue);
      displayResult(displayValue);
      return;
    }

    if (buttonValue === ".") {
      // Check if the last input was an operator or if the display is empty
      console.log("Last input operator:", lastInputOperator);
      if (lastInputOperator) {
        // If the last input was an operator, we can allow a decimal point
        const lastOperatorIndex = displayValue.lastIndexOf(lastInputOperator);
        console.log("Last operator index:", lastOperatorIndex);
        const currentNumber = displayValue.slice(lastOperatorIndex + 1);
        console.log("Current number:", currentNumber);
        if (currentNumber.includes(".")) {
          // If the current number already has a decimal point, do not allow another one
          return;
        }
      } else {
        // If there is no last input operator, we are at the beginning of the display
        if (displayValue.includes(".")) {
          // If the display already has a decimal point, do not allow another one
          return;
        } else if (displayValue === "") {
          // If the display is empty, we can allow a decimal point
          displayValue = "0";
        }
      }
    }

    if (buttonValue === "=") {
      // Perform the calculation
      displayValue = calculateResult(displayValue);
      displayResult(displayValue);
      return;
    }

    displayValue += buttonValue;
    displayResult(displayValue);
  });
});
