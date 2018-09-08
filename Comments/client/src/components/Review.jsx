import React from 'react';

var Review = ({comment}) => {
  return (
    <div>
      <img src = {comment.ImageUrl} ></img>
      <p>{comment.Name}</p>
      <p>Date</p>
      <p>{comment.Text}</p>
    </div>
  )
}

module.exports.Review = Review;