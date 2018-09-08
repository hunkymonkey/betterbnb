import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Review } from './components/Review.jsx';
import styles from './styles/index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      searchVal: '',
      overallRev: 5,
      accuracyRev: 5,
      communicationRev: 5,
      cleanlinessRev: 5,
      locationRev: 5,
      checkinRev: 5,
      valueRev: 5,
    }
    
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetch = this.fetch.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.setAccRev = this.setAccRev.bind(this);
    this.setCommRev = this.setCommRev.bind(this);
    this.setCheckinRev = this.setCheckinRev.bind(this);
    this.setCl
  }

  componentDidMount() {
    this.fetch();
  }

  setAccRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.CommunicationRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      communicationRev: sum,
    })
  }

  setCommRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.CommunicationRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      communicationRev: sum,
    })
  }

  setCheckinRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.CheckinRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      checkinRev: sum,
    })
  }

  setCleanRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.CleanlinessRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      cleanlinessRev: sum,
    })
  }

  setValueRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.ValueRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      valueRev: sum,
    })
  }

  setLocatRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.LocationRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      locationRev: sum,
    })
  }

  setCheckinRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.CheckinRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      locationRev: sum,
    })
  }

  fetch () {
    axios.get('/betterBnB/comments')
      .then((response) => {
        this.setState({
          comments: response.data,
        })
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
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
        <h2 className = {styles.title}>664 Reviews {this.state.overallRev}</h2>
        <form onSubmit = {this.handleSubmit}>
          <input type = 'text' value = {this.state.searchVal} onChange = {this.handleSearchChange} />
        </form>
        <h3>
          Accuracy {this.state.accuracyRev}
          Communication {this.state.communicationRev}
          Cleanliness {this.state.cleanlinessRev}
          Location {this.state.locationRev}
          Check-in {this.state.checkinRev}
          Value {this.state.valueRev}
        </h3>
        {this.state.comments.map((comment) => {
          return <Review comment = {comment}/>
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))