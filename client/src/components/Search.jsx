import React, { Component } from 'react';
import styles from '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <div id={styles.searchDiv}>
        <img src="https://image.ibb.co/jKaxPp/minimal_magnifying_glass.png" alt="minimal_magnifying_glass" border="0" />
        <input id={styles.search} placeholder="Search" value={this.state.term} onChange={this.handleSearch} />
      </div>
    ); 
    
  }
}

export default Search;