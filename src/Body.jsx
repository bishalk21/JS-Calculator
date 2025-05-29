import React, { useState } from "react";
import Display from "./components/Display";
import ButtonsArea from "./components/ButtonsArea";

const operators = ["+", "-", "*", "/"];

const Body = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const calculateExpression = (expression) => {
    try {
      // Replace multiplication and division symbols for eval
      const formattedExpression = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/");
      // Evaluate the expression using eval
      const result = Function(
        `'use strict'; return (${formattedExpression})`
      )();

      return parseFloat(result.toFixed(2)); // Format the result to 2 decimal places
    } catch (error) {
      console.error("Error in calculation:", error);
      return "Error";
    }
  };

  const handleButtonClick = (buttonValue) => {
    // console.log(`Button Clicked: ${buttonValue}`); // log the button value

    if (buttonValue === "AC") {
      setDisplayValue("");
      return;
    }

    if (buttonValue === "C") {
      let newValue = displayValue.slice(0, -1);
      setDisplayValue(newValue);
      return;
    }

    if (operators.includes(buttonValue)) {
      setLastOperator(buttonValue);
      const lastCharacter = displayValue[displayValue.length - 1];
      if (operators.includes(lastCharacter)) {
        const valueWithoutLastOperator = displayValue.slice(0, -1);
        setDisplayValue(valueWithoutLastOperator + buttonValue);
        return;
      }
    }

    if (buttonValue === ".") {
      if (lastOperator) {
        const lastOperatorIndex = displayValue.lastIndexOf(lastOperator);
        const lastNumberAfterOperator = displayValue.slice(
          lastOperatorIndex + 1
        );
        if (lastNumberAfterOperator.includes(".")) {
          return; // if the last number already has a decimal, do nothing
        }
      } else {
        if (displayValue.includes(".")) {
          return; // if the display already has a decimal, do nothing
        }
      }
    }

    if (buttonValue === "=") {
      const result = calculateExpression(displayValue);
      setDisplayValue(result.toString());
      setLastOperator(""); // Reset last operator after calculation
      return;
    }

    setDisplayValue(displayValue + buttonValue);
  };

  return (
    <div className="wrapper">
      <h1>React Calculator App</h1>

      <div className="calculator">
        <Display displayValue={displayValue} />
        <ButtonsArea handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Body;
