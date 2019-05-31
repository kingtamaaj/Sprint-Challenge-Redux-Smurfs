import React, { Component } from 'react';
import './App.css';
import CreateSmurf from './CreateSmurf';
import SmurfList from './SmurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <CreateSmurf />
        <SmurfList />
        </div>
    );
  }
}
export default App;