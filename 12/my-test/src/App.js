import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      sec: 0
    }
  }

  componentDidMount = () => {
    // window.setInterval(() => this.setState(previousState => {
    //   console.log(previousState);
    //   return {sec: previousState.sec+=1}
    // }), 1000);
  }
  

  render() {
    return (
      <TodoList />
    );
  }
}

export default App;
