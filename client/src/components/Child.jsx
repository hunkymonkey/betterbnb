import React from "react";
import ReactDOM from "react-dom";
import styles from "../styles/styles.css";
import RightBtn from "./rightButton.jsx";
import LeftBtn from "./leftBtn.jsx";
import Slides from "./slides.jsx";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.props.house.pictures,
      display: 0
    };
    this.getSlide = this.getSlide.bind(this);
    this.getLastSlide = this.getLastSlide.bind(this);
    this.getNextSlide = this.getLastSlide.bind(this);
  }
  componentDidMount() {
    console.log(this.state.pictures);
  }

  getSlide(index) {
    this.setState({ display: index });
  }

  getLastSlide(e) {
    let index = this.state.display;
    let { pictures } = this.state;
    let picturesLength = pictures.length;

    if (index < 1) {
      index = picturesLength;
    }

    --index;

    this.setState({ display: index });
  }

  getNextSlide(e) {
    let index = this.state.display;
    let { pictures } = this.state;
    let picturesLength = pictures.length;

    if (index === picturesLength) {
      index = -1;
    }

    index++;

    this.setState({ display: index });
  }
  render() {
    return (
      <div className={styles.modal}>
        <div>
          <LeftBtn handleClick={this.getLastSlide} />
        </div>
        <button
          onClick={this.props.handleClick}
          className={styles.exitBtn}
          type="button"
        >
          X
        </button>

        <div className={styles.modalImage}>
          <div className={styles.exitBar} />

          <img src={this.state.pictures[this.state.display]} />
          
        </div>
        <div>
          <Slides
            pictures={this.state.pictures}
            display={this.state.display}
            getSlide={this.getSlide}
          />
        </div>

        <RightBtn handleClick={this.getNextSlide} />
      </div>
    );
  }
}

export default Child;
