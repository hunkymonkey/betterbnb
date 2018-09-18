import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import styles from '../src/styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
} 


ReactDOM.render(<App />, document.getElementById('header'));