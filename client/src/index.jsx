import React from "react";
import ReactDOM from "react-dom";
import Parent from "./components/Parent.jsx";
import Data from "../../Data.js";

ReactDOM.render(
  <Parent picture={Data[0].pictures[0]} />,
  document.getElementById("root")
);
