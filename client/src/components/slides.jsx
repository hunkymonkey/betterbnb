import React, { Component } from "react";
import styles from "../styles/styles.css";
import $ from "jquery";

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ hidden: true }), 4000);
  }

  render() {
    return this.state.hidden ? (
      <div
        className={styles.indicatorContainer}
        onMouseEnter={() => {
          this.setState({ hidden: false });
        }}
      />
    ) : (
      <div className={styles.nico}>
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
      </div>
    );
  }
}

export default Slides;
