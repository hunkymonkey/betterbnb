import React, { Component } from 'react';
import LocationJSON from '../../../database/countries.json';
import styles from '../styles/Search.css';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  };
  
  render() {

    return (
      <div id={styles.searchDiv}>
        <img src="https://image.ibb.co/jKaxPp/minimal_magnifying_glass.png" alt="minimal_magnifying_glass" border="0" />
        <input onChange={this.onChange} placeholder="Search" id={styles.search} />
      </div>
    );
  }
}

export default Search;
