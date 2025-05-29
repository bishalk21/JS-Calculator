import React from "react";

const Display = ({ displayValue }) => {
  return <div className="display">{displayValue || "0.00"}</div>;
};

export default Display;
