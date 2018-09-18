import React from 'react';
import styles from '../styles/Arrangement.css';

const Arrangement = ({bedNum}) => {
  const items = [];
  for (let i = 1; i <= bedNum; i++) {
    items.push(
      <div className={styles.listItem}>
        <img src="https://image.ibb.co/kEV5N9/Screen_Shot_2018_09_13_at_10_58_20_AM.png" alt="Screen_Shot_2018_09_13_at_10_58_20_AM" border="0" />
        <h5>Bedroom {i}</h5>
        <p>1 king bed</p>
      </div>
    );
  }
  
  return (
    <div id={styles.arrangementDiv}>
      <h2>Sleeping arrangements</h2>
      <div id={styles.list}>
        {items}
      </div>
    </div>
  );
};

export default Arrangement;