import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Homepage } from './pages';

const App = () => {
  return (
    <div>
      <Homepage />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))