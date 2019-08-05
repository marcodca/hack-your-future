import React, { Component } from 'react';

//Components
import List from "./List"
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <List />
      </div>
    );
  }
}

export default App;
