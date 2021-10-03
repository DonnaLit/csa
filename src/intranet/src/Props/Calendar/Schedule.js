import React, { Component } from 'react';
import './Month.css';
import Calendar from './Calendar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Calendar Scheduler App</h1>
        <Calendar />
      </div>
    );
  }
}

export default App;