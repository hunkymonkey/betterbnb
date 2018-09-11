import React from 'react';
import styles from '../styles/index.css';

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var Review = ({comment}) => {
  return (
    <div className = {styles.review}>
      <img src = {comment.ImageUrl} ></img>
      <p className = {styles.reviewName}>{comment.Name}</p>
      <p className = {styles.reviewDate}>{monthNames[Number(comment.Date.slice(5,7) - 1)] + ' ' + comment.Date.slice(0,4)}</p>
      <p>{comment.Text}</p>
    </div>
  )
}

module.exports.Review = Review;