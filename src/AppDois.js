import React, { Component } from 'react';
import './App.css';

class AppDois extends Component {
  render() {
    // var helloWorld = 'Welcome to the Road to learn React';
    // var helloWorld = 'OI MUNDO TESTANDO ISSO AQUI';
    const helloWorld = 'OI MUNDO TESTANDO ISSO AQUI';
    return (
      <div className="AppDois">
        <h1>AppDois----------------------------------------------------------------</h1>
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default AppDois;