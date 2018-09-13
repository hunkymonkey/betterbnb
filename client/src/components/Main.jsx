import React from 'react';

const Main = (props) => {
  return (
    <div>
      <h5>{props.houseType}</h5>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Main;