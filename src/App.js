// src/App.js
import React from 'react';
import './App.css';
import Converter from './Converter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Length Converter</h1>
        <Converter />
      </header>
    </div>
  );
}

export default App;
