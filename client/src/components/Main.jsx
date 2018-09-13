import React from 'react';
import styles from '../styles/Main.css';

const Main = (props) => {
  return (
    <div id={styles.main}>
      <div id={styles.titleAndAvatarDiv}>
        <div id={styles.titleDiv}>
          <h5 id={styles.houseType}>{props.houseType.toUpperCase()}</h5>
          <h1 id={styles.title}>{props.title}</h1>
          <p>{props.city}</p>
        </div>
        <span id={styles.avatarDiv}>
          <img src={props.ownerPic} />
          <p>{props.ownerName}</p>
        </span>
      </div>
      <div id={styles.infoDiv}>
        <p><img src="https://image.ibb.co/fh3KEp/Screen_Shot_2018_09_13_at_8_14_09_AM.png" alt="Screen_Shot_2018_09_13_at_8_14_09_AM" border="0" />{props.guestNum} guests</p>
        <p><img src="https://image.ibb.co/i2u4fU/Screen_Shot_2018_09_13_at_8_14_22_AM.png" alt="Screen_Shot_2018_09_13_at_8_14_22_AM" border="0" />{props.bedroomNum} bedroom</p>
        <p><img src="https://image.ibb.co/fwxeEp/Screen_Shot_2018_09_13_at_8_14_40_AM.png" alt="Screen_Shot_2018_09_13_at_8_14_40_AM" border="0" />{props.bedNum} bed</p>
        <p><img src="https://image.ibb.co/iGnPfU/Screen_Shot_2018_09_13_at_8_14_30_AM.png" alt="Screen_Shot_2018_09_13_at_8_14_30_AM" border="0" />{props.bathNum} bath</p>
      </div>
      <div>
        <p>{props.description}</p>
        <a href=''>Contact host</a>
      </div>
    </div>
  );
}

export default Main;