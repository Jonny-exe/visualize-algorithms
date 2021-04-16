import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlgorithmSelection from './components/AlgorithmSelection'
import Algorithms from './components/Algorithms'

function App() {
  return (
    <div className="App">
      <AlgorithmSelection />
        <div className="algorithm-container">
          <Algorithms />
          <button class="see-code">{"<>"}</button>
        </div>
    </div>
  );
}

export default App;
