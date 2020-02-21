import React from 'react';
import ReactJson from 'react-json-view';
import logo from './logo.svg';
import './App.css';

let data = require('./ast.json');

function App() {
  return (
    <div className="App">
      <h1>React Component AST</h1>
      <ReactJson src={data} />
    </div>
  );
}

export default App;
