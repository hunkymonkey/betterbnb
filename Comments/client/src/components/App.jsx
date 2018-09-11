import React from 'react';
import axios from 'axios'
import { Review } from './Review.jsx';
import styles from '../styles/index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      searchVal: '',
      overallRev: null,
      accuracyRev: null,
      communicationRev: null,
      cleanlinessRev: null,
      locationRev: null,
      checkinRev: null,
      valueRev: null,
    }
    
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetch = this.fetch.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.setAccRev = this.setAccRev.bind(this);
    this.setCommRev = this.setCommRev.bind(this);
    this.setCheckinRev = this.setCheckinRev.bind(this);
    this.setCleanRev = this.setCleanRev.bind(this);
    this.setValueRev = this.setValueRev.bind(this);
    this.setLocatRev = this.setLocatRev.bind(this);
    this.setOverallRev = this.setOverallRev.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  setAccRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.AccuracyRating
    })
    sum = sum / this.state.comments.length;
    this.setState({
      accuracyRev: sum,
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
      sum += comment.CheckInRating
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

  setOverallRev() {
    var sum = 0;
    this.state.comments.forEach((comment) => {
      sum += comment.AccuracyRating + comment.CheckInRating + comment.CleanlinessRating + comment.CommunicationRating + comment.LocationRating + comment.ValueRating;
    })
    sum = sum / this.state.comments.length / 6
    this.setState({
      overallRev: sum,
    })
  }

  fetch () {
    axios.get('/betterBnB/comments')
      .then((response) => {
        this.setState({
          comments: response.data,
        })
        this.setAccRev();
        this.setCheckinRev();
        this.setCleanRev();
        this.setCommRev();
        this.setLocatRev();
        this.setValueRev();
        this.setOverallRev();
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
        <h2 className = {styles.title}>{this.state.comments.length} Reviews {this.state.overallRev}</h2>
        <form onSubmit = {this.handleSubmit}>
          <img className = {styles.magGlass} src = 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/mCz7hqj/videoblocks-magnifying-glass-search-icon-in-and-out-animation-loop-black_hovv31ukf_thumbnail-full04.png' />
          <input className = {styles.searchBar} type = 'text' value = {this.state.searchVal} onChange = {this.handleSearchChange} />
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
          return <Review key = {comment._id} comment = {comment}/>
        })}
      </div>
    )
  }
}

module.exports.App = App;