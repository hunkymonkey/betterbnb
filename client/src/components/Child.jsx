import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/styles.css";
import RightBtn from "./rightButton.jsx";
import LeftBtn from "./leftBtn.jsx";
import axios from "axios";
const randomIndexOf = arr => Math.floor(Math.random() * arr.length);

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.house.pictures,
      display: []
    };
  }
  componentDidMount() {
    console.log(this.state.pictures);
  }
  render() {
    return (
      <div className={styles.modal}>
        <div>
          <LeftBtn handleClick={this.props.handleClick} />
        </div>
        <img
          src={this.state.pictures[randomIndexOf(this.state.pictures)]}
          className={styles.modalImage}
        />
        <RightBtn handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default Child;
