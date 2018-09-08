import React from 'react';
import styles from '../styles/Navigation.css';

const Navigation = (props) => {
  return (
    <div id={styles.navListDiv}>
      <ul id={styles.navList}>
        <li>Become a host</li>
        <li>Earn credit</li>
        <li>Help</li>
        <li>Sign Up</li>
        <li>Log in</li>
      </ul>
    </div>
  );
};

export default Navigation;