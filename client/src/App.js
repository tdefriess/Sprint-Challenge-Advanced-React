import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      darkMode: false,
    };    
  }

  componentDidMount(){
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log('response', res);
        this.setState({players: res.data})
      })
      .catch(err => console.log('The data was not returned', err));
  }

  componentDidUpdate(){
    console.log('State has been updated', this.state.players)    
  }

  render() {
     
    return (
      <div className="App">
        <Header />
        {this.state.players.map(player => {
          return (
            <PlayerCard key={player.id} name={player.name} country={player.country} searches={player.searches}/>
          )
        })}
      </div>
    );
  }  
}

export default App;
