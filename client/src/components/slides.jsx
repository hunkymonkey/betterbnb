import React, { Component } from "react";
import styles from "../styles/styles.css";

class Slides extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className={styles.indicatorContainer}>
        <ul className={styles.carouselIndicators}>
          {this.props.pictures.map((slide, index) => (
            <li key={index}>
              <img
                src={slide}
                onClick={e => this.props.getSlide(index)}
                className={styles.slide}
              />
            </li>
          ))}
        </ul>
      // </div>
    );
  }
}

export default Slides;
