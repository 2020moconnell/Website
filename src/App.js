import React from 'react';
//import logo from './logo.svg';
import yinyang from './yin-yang.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header>
          Chinese Zodiac Signs
        </header>
        <img src={yinyang} className="yin-yang" alt="logo" />
        <p>
          Enter your birthday to begin.
        </p>
      </header>
    </div>
  );
}

export default App;
