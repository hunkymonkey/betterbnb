import React, { Component } from 'react';
import Search from './Search.jsx';
import styles from '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={styles.header}>
        <img id={styles.logo} src="http://www.logoeps.net/wp-content/uploads/2016/12/airbnb_logo.png" />
        <Search />
      </div>
    );
  }
}

export default Header;