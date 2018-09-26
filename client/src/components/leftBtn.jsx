import React, { Component } from "react";
import styles from "../styles/styles.css";

class LeftBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <svg
        onClick={() => this.props.handleClick()}
        viewBox="0 0 18 18"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        className={styles.btnStyle}
      >
        <path
          d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
          fillRule="evenodd"
        />
      </svg>
    );
  }
}

export default LeftBtn;
