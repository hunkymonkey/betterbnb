import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/styles.css";
import Modal from "./Modal.jsx";
import Child from "./Child.jsx";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      showModal: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ showModal: !this.state.showModal });
    console.log(this.state.showModal);
  }

  render() {
    return (
      <div>
        <p>JUST A FEW THING SIN THE BACKGROUND</p>
        {this.state.showModal ? (
          <Modal>
            <Child
              picture={this.props.picture}
              handleClick={this.handleClick}
            />
          </Modal>
        ) : (
          <div />
        )}
        <img
          onClick={this.handleClick}
          src={this.props.picture}
          className={styles.image}
        />
      </div>
    );
  }
}

export default Parent;
