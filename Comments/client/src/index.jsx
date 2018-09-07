import React from 'React';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Review } from './components/Review.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchVal: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      searchVal: e.target.value
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchVal);
    this.setState({
      searchVal: ''
    });
  };

  render() {
    return (
      <div>
        <h2>664 Reviews</h2>
        <form onSubmit = {this.handleSubmit}>
          <input type = 'text' value = {this.state.searchVal} onChange = {this.handleSearchChange} />
        </form>
        <Review />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))