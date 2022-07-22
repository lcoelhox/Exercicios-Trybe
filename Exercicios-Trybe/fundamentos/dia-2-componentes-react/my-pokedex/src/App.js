import logo from './logo.svg';
import './App.css';
import Pokedex from './pokedex';
import React from 'react';

class App extends React.Component {
  render() {
      return(
          <div>
             <Pokedex/>
          </div>
      )
  }
}


export default App;
