import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import styles from '../src/styles/index.css';

const HeaderModule = () => {
  return (
    <div>
      <Header />
    </div>
  );
} 


ReactDOM.render(<HeaderModule />, document.getElementById('headerModule'));