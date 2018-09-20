import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/styles.css";
import Modal from "./Modal.jsx";
import Child from "./Child.jsx";
import axios from "axios";
import $ from 'jquery';
const randomIndexOf = arr => Math.floor(Math.random() * arr.length);

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      houses: [],
      house: null
    };
    this.handleExit = this.handleExit.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios
      .get("http://localhost:1337/betterbnb/pictures")
      .then(({ data }) => {
        this.setState({ houses: data });
      })
      .then(() => {
        let houses = this.state.houses;
        this.setState({
          house: houses[randomIndexOf(houses)]
        });
      })
      .catch(err => console.log(err));
  }

  handleExit() {
    this.setState({ showModal: !this.state.showModal });
    console.log(this.state.house);
    if (this.state.showModal) {
      $('body').css('overflow-y', 'hidden;')
    } else {
      $('body').css('overflow-y', 'auto;')
    }
  }

  render() {
    return (
      <div>
        {this.state.showModal ? (
          <Modal>
            <Child handleClick={this.handleExit} house={this.state.house} />
          </Modal>
        ) : (
          <div />
        )}
        {this.state.house === null ? (
          <div />
        ) : (
          <img
            onClick={this.handleExit}
            src={this.state.house.pictures[0]}
            className={styles.image}
          />
        )}
      </div>
    );
  }
}

export default Parent;
