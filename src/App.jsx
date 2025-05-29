import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>
);
