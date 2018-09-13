import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './components/Main.jsx';
import Amenities from './components/Amenities.jsx';
import Arrangement from './components/Arrangement.jsx';
import styles from './styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: '',
      ownerPic: '',
      houseType: '',
      title: '',
      city: '',
      guestNum: 0,
      bedroomNum: 0,
      bedNum : 0,
      bathNum: 0,
      bathType: '',
      description: '',
      amenities: []
    };
    this.getRandomHouse = this.getRandomHouse.bind(this);
  }

  componentDidMount() {
    this.getRandomHouse();
  };

  getRandomHouse() {
    axios.get("/api/bbnb_detail")
      .then(({data}) => {
        console.log('data is', data.ownerName)
        this.setState({
          ownerName: data.ownerName,
          ownerPic: data.ownerPic,
          houseType: data.houseType,
          title: data.title,
          city: data.city,
          guestNum: data.guestNum,
          bedroomNum: data.bedroomNum,
          bedNum: data.bedNum,
          bathNum: data.bathNum,
          bathType: data.bathType,
          description: data.description,
          amenities: data.amenities
        });
        console.log('this state is', this.state)
      })
      .catch(console.log('err getting back from axios get req'));
  }

  render() {
    const { ownerName, ownerPic, houseType, title, city, guestNum, bedroomNum, bedNum, bathNum, bathType, description, amenities } = this.state;
    return (
      <div>
        <Main houseType={houseType} title={title} city={city} ownerPic={ownerPic} ownerName={ownerName} guestNum={guestNum} bedroomNum={bedroomNum} bedNum={bedNum} bathNum={bathNum} description={description} />
        <Amenities />
        <Arrangement />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
