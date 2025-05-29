import React from "react";
import Button from "./Button";

const ButtonsArea = ({ handleButtonClick }) => {
  const buttons = [
    { btnClass: "AC", buttonName: "AC", id: "ac" },
    { btnClass: "C", buttonName: "C", id: "c" },
    { btnClass: "divide", buttonName: "/", id: "divide" },
    { btnClass: "multi", buttonName: "*", id: "multiply" },

    { btnClass: "seven", buttonName: "7", id: "seven" },
    { btnClass: "eight", buttonName: "8", id: "eight" },
    { btnClass: "nine", buttonName: "9", id: "nine" },
    { btnClass: "minus", buttonName: "-", id: "minus" },

    { btnClass: "four", buttonName: "4", id: "four" },
    { btnClass: "five", buttonName: "5", id: "five" },
    { btnClass: "six", buttonName: "6", id: "six" },
    { btnClass: "plus", buttonName: "+", id: "plus" },

    { btnClass: "one", buttonName: "1", id: "one" },
    { btnClass: "two", buttonName: "2", id: "two" },
    { btnClass: "three", buttonName: "3", id: "three" },
    { btnClass: "ans", buttonName: "=", id: "equals" },

    { btnClass: "dot", buttonName: ".", id: "dot" },
    { btnClass: "zero", buttonName: "0", id: "zero" },
  ];

  return (
    <div className="btn-area">
      {buttons.map((button) => {
        return (
          <Button
            key={button.id || button.buttonName}
            btnClass={button.btnClass}
            buttonName={button.buttonName}
            handleButtonClick={handleButtonClick}
          />
        );
      })}
    </div>
  );
};

export default ButtonsArea;
