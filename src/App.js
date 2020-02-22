import React from 'react';
import dude from './dude.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dude} className="App-logo" alt="logo" />
        <p>
          Mobile Golf is FUN!
        </p>
      </header>
    </div>
  );
}

export default App;
