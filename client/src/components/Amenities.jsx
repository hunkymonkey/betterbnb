import React from 'react';
import styles from '../styles/Amenities.css';

const Amenities = (props) => {
  return (
    <div id={styles.amenities}>
      <h2>Amenities</h2>
      <div id={styles.list}>
        {props.amenities.map((amenity, i) => {
          if (i < 6) {
            return (
              <p><img src="https://image.ibb.co/ej41up/Screen_Shot_2018_09_13_at_9_05_58_AM.png" alt="Screen_Shot_2018_09_13_at_9_05_58_AM" border="0" />{amenity}</p>
            )
          }
          if (i === 6) {
            return <h5>Show all {props.amenities.length} amenities</h5>
          }
        })}
      </div>
    </div>
  );
};

export default Amenities;