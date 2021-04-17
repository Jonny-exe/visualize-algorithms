import React, {useState} from 'react';
import './App.css';
import AlgorithmSelection from './components/AlgorithmSelection'
import Algorithms from './components/Algorithms'
import AlgorithmSource from './components/AlgorithmSource'

function App() {

  const [showCode, setShowCode] = useState(false)
  const [algorithmType, setAlgorithmType] = useState("mergesort")
  const toggleCode = () => {
    setShowCode(!showCode)
  }

  return (
    <div className="App">
      <AlgorithmSelection setAlgorithmType={setAlgorithmType} algorithmType={algorithmType} />
        <div className="algorithm-container">
          <Algorithms algorithmType={algorithmType}/>
        </div>
        <button onClick={toggleCode} className="see-code">{"<>"}</button>
          <div className={`code ${showCode ? "active" : ""}`}>
              {
                <AlgorithmSource algorithmType={algorithmType} />
              }
          </div>
          <div onClick={toggleCode} className={`code-background ${showCode ? "active" : ""}`}>
          </div>
    </div>
  );
}

export default App;
