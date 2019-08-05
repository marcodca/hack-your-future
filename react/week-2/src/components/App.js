import React, { Component } from 'react';

//Components
import List from './List';
import Header from './Header';


//Import list
import list from "./../listOfTodos.json";

class App extends Component {
  constructor() {
    super();
    this.state = { listOfTodos: list }
  }



  render() {
    return (
      <div >
        <Header />
        <List list={this.state.listOfTodos} />
      </div>
    );
  }
}

export default App;
