import React from 'react';
import Search from './Search.jsx';
import Navigation from './Navigation.jsx';
import styles from '../styles/Header.css';

const Header = (props) => {
  return (
    <div id={styles.header}>
      <img id={styles.logo} src="http://www.logoeps.net/wp-content/uploads/2016/12/airbnb_logo.png" />
      <Search />
      <Navigation />
    </div>
  );
}

export default Header;