import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Amenities from './components/Amenities.jsx';
import Arrangement from './components/Arrangement.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  };

  render() {
    return (
      <div>
        <Main />
        <Amenities />
        <Arrangement />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));