import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AlgorithmSelection from './components/AlgorithmSelection'
import Algorithms from './components/Algorithms'

function App() {

  const [showCode, setShowCode] = useState(false)
  const toggleCode = () => {
    setShowCode(!showCode)
  }

  return (
    <div className="App">
      <AlgorithmSelection />
        <div className="algorithm-container">
          <Algorithms />
        </div>
        <button onClick={toggleCode} class="see-code">{"<>"}</button>
          <div className={`code ${showCode ? "active" : ""}`}>
            <code>
              Hello this is the code
            </code>
          </div>
          <div onClick={toggleCode} className={`code-background ${showCode ? "active" : ""}`}>
          </div>
    </div>
  );
}

export default App;
