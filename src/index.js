const buttons = document.querySelectorAll(".btn-area > div");
// console.log("Buttons:", buttons); // nodelist of buttons

// nodelist means a collections of nodes (elements) in the DOM
// we need to convert it to an array using Array.from() or spread operator

const buttonsArr = Array.from(buttons);
// console.log("Buttons Array:", buttonsArr); // array of buttons

const display = document.querySelector(".display");
console.log("Display Element:", display); // display element

// all the elements in dom provides some methods and properties

// display value for calculator (state)
let displayValue = "";
// last operator to handle operator precedence
let lastOperator = "";
// operators for calculator
let operators = ["+", "-", "*", "/"];

// function to display input on the calculator screen
let displayInput = (val) => {
  display.textContent = val || "0.00";
};

// function to evaluate the expression
const calculateExpression = (expression) => {
  let result;
  try {
    // replace multiplication and division with their respective symbols
    expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
    // evaluate the expression using function constructor
    // function constructor allows us to create a new function from a string
    // using 'use strict' to avoid any issues with eval
    result = Function(`'use strict'; return (${expression})`)();
    // format the result to 2 decimal places
    // using toFixed to format the result
    // parseFloat to convert the string to a number
    return parseFloat(result.toFixed(2));
  } catch (error) {
    console.error("Error in calculation:", error);
    return "Error";
  }
};

// event listener for each button to handle clicks
buttonsArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = button.textContent;
    // console.log("Button Clicked:", buttonValue); // log the button value

    // handle AC button
    if (buttonValue === "AC") {
      displayValue = "";
      displayInput(displayValue);
      return;
    }

    // handle C button
    if (buttonValue === "C") {
      displayValue = displayValue.slice(0, -1);
      displayInput(displayValue);
      return;
    }

    // handle operator buttons
    if (operators.includes(buttonValue)) {
      // check if the last character is an operator
      const lastCharacter = displayValue[displayValue.length - 1];
      if (operators.includes(lastCharacter)) {
        // if it is, remove it
        displayValue = displayValue.slice(0, -1);
      }
      // add the operator to the display value
      displayValue += buttonValue;
      lastOperator = buttonValue;
      displayInput(displayValue);
      return;
    }

    // handle decimal point
    if (buttonValue === ".") {
      // check if the last operator exists
      if (lastOperator) {
        // find the last operator index
        const lastOperatorIndex = displayValue.lastIndexOf(lastOperator);
        // get the last number after the operator to check for decimal
        const lastNumberAfterOperator = displayValue.slice(
          lastOperatorIndex + 1
        );
        // if the last number already has a decimal, return
        if (lastNumberAfterOperator.includes(".")) {
          return;
        }
        // if the display value is empty or ends with an operator, add a zero before the decimal
      } else if (displayValue.includes(".")) {
        return; // if the display value already has a decimal, do nothing
      }
    }

    // handle equals button
    if (buttonValue === "=") {
      try {
        // calculate the expression and update the display value
        displayValue = calculateExpression(displayValue);
      } catch (error) {
        console.error("Error in calculation:", error);
        displayValue = "Error";
      }
      displayInput(displayValue);
      return;
    }

    // for all other buttons, just append the value to the display
    if (buttonValue === "×") {
      displayValue += "*"; // replace × with *
    } else if (buttonValue === "÷") {
      displayValue += "/"; // replace ÷ with /
    } else {
      displayValue += buttonValue; // append the button value
    }
    // update the display with the new value
    if (displayValue === "") {
      displayValue = "0.00"; // if display value is empty, set it to 0.00
    }
    if (displayValue.length > 15) {
      displayValue = displayValue.slice(0, 15); // limit the display value to 15 characters
    }
    displayInput(displayValue);
  });
});
