import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Homepage } from './pages/Homepage';

const App = () => {
  return (
    <div>
      <Homepage />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))