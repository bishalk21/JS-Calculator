const displayElm = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
// buttons is a node list (node list is an  is an array-like collection of DOM nodes
// (such as HTML elements, text nodes, or comments) usually returned by methods like document.querySelectorAll()
// or the Node.childNodes property. While it looks and behaves similarly to a standard JavaScript array,
// it lacks native array methods like .map(), .filter(), or .reduce()
// converting it to an array to use array methods on it
const buttonsArr = Array.from(buttons);
let displayValue = "";
let operators = ["+", "-", "*", "/"];

// FUNCTION TO DISPLAY RESULT
const displayResult = (val) => {
  displayElm.textContent = val ? val : "0.00";
};

// FUNCTION TO CALCULATE RESULT
const calculateResult = (expression) => {
  let result;
  try {
    // expression = expression.replace(/\*/g, "×").replace(/\//g, "÷");
    // Function constructor is used to create a new function object.
    // It takes a string of code as an argument and returns a new function that can be called later.
    result = Function(`"use strict"; return (${expression})`)();
    // parseFloat() is a built-in JavaScript function that converts a string or number to a floating-point number.
    // toFixed() is a method of the Number object that formats a number using fixed-point notation.
    // It takes an integer as an argument, which specifies the number of digits to appear after the decimal point.
    return parseFloat(result.toFixed(2)).toString();
  } catch (error) {
    displayResult("Error");
  }
};

// add event listeners to each button
buttonsArr.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnVal = btn.textContent;

    if (btnVal === "AC") {
      displayValue = "";
      displayResult(displayValue);
      return;
    }

    if (btnVal === "C") {
      // remove the last character from the display value
      // slice(0, -1) returns a new string that is a copy of the original string with the last character removed
      displayValue = displayValue.slice(0, -1);
      displayResult(displayValue);
      return;
    }

    // if click on an operator
    if (operators.includes(btnVal)) {
      // check if the last character in the display is also an operator
      const lastChar = displayValue[displayValue.length - 1];
      if (operators.includes(lastChar)) {
        // if it is, replace the last operator with the new one
        displayValue = displayValue.slice(0, -1);
      }
      // this allows users to change their operator choice without having to clear the entire display
      displayValue += btnVal;
      displayResult(displayValue);
      return;
    }

    if (btnVal === ".") {
      // check if the last input was an operator or if the display is empty
      const lastChar = displayValue[displayValue.length - 1];
      if (operators.includes(lastChar) || displayValue === "") {
        // if the last input was an operator or the display is empty, we can allow a decimal point
        displayValue += "0.";
        displayResult(displayValue);
        return;
      } else {
        // if the last input was not an operator, we need to check if the current number already has a decimal point
        // find the index of the last operator in the display value
        const lastOperatorIndex = Math.max(
          displayValue.lastIndexOf("+"),
          displayValue.lastIndexOf("-"),
          displayValue.lastIndexOf("*"),
          displayValue.lastIndexOf("/"),
        );
        // get the current number by slicing the display value from the last operator index to the end
        const currentNumber = displayValue.slice(lastOperatorIndex + 1);
        if (currentNumber.includes(".")) {
          // if the current number already has a decimal point, do not allow another one
          return;
        }
      }
    }

    if (btnVal === "=") {
      // perform the calculation
      displayValue = calculateResult(displayValue);
      displayResult(displayValue);
      return;
    }

    displayValue += btnVal;
    displayResult(displayValue);
  });
});
