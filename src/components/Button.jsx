import React from "react";

const Button = ({ btnClass, buttonName, handleButtonClick }) => {
  return (
    <div
      className={`btn-${btnClass}`}
      onClick={() => handleButtonClick(buttonName)}
    >
      {buttonName}
    </div>
  );
};

export default Button;
