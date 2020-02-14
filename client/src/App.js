import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount(){
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log('response', res);
      })
      .catch(err => console.log('The data was not returned', err));
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }  
}

export default App;
