import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/styles.css";
import RightBtn from "./rightButton.jsx";
import LeftBtn from "./leftBtn.jsx";

function Child({ picture, handleClick }) {
  return (
    <div className={styles.modal}>
      <div>
        <LeftBtn handleClick={handleClick} />
      </div>
      <img src={picture} className={styles.modalImage} />
      <RightBtn handleClick={handleClick} />
    </div>
  );
}

export default Child;
