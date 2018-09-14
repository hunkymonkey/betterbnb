import React from 'react';
import styles from '../styles/index.css';

var PageButton = (props) => {
  return (
    <div className = {styles.PageButton}>
      <li className = {styles.PageButtonList}>
        <button onClick = {() => props.setNewComments(props.page)}>{props.page}</button>
      </li>
    </div>
  )
}

module.exports.PageButton = PageButton;