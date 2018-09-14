import React from 'react';
import styles from '../styles/index.css';
import { PageButton } from './PageButton.jsx';

var Scroller = (props) => {
  if (props.pages) {
    return (
      <div className = {styles.scroller}>
        <ul className = {styles.scrollerList}>
          {props.pages.map((page) => {
            return <PageButton key = {page[0]} page = {page[1]} setNewComments = {props.setNewComments} />
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <div>loading...</div>
    )
  }

}

module.exports.Scroller = Scroller;