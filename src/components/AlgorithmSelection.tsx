import React, {useState} from 'react'

interface Props {
  algorithmType: string;
  setAlgorithmType: (algo_type: string) => void;
}

const AlgorithmSelection: React.FC<Props> = ({algorithmType, setAlgorithmType}) => {

  const [showSelectionWindow, setShowSelectionWindow] = useState(false)
  const getPrettiAlgoritmName = (algorithmType: string) => {
    let result = ""
    switch (algorithmType) {
      case "quicksort":
        result = "Quick sort"
        break
      case "mergesort":
        result = "Merge sort"
        break
    }
    return result
  }

  const changeAlgorithmType = (newAlgorithmType: string) => {
    setAlgorithmType(newAlgorithmType)
    setShowSelectionWindow(false)
  }


  const prettiAlgoritmName = getPrettiAlgoritmName(algorithmType)

  return (
    <>
    <div className="algorithm-selection"  onClick={() => setShowSelectionWindow(true)}> 
      <h2> {prettiAlgoritmName} </h2>
      <hr/>
    </div>
    <div className={`algorithm-selection-window ${showSelectionWindow ? "active" : ""}`}>
      <div>
      <h2 style={{width: 'auto', height: "auto"}}> Choose an algorithm </h2>
      <hr/>
      </div>
      <button onClick={() => changeAlgorithmType("mergesort")} className="window-button">Merge sort</button>
      <button onClick={() => changeAlgorithmType("quicksort")} className="window-button">Quick sort</button>
    </div>
    <div className={`algorithm-selection-window-background ${showSelectionWindow ? "active" : ""}`} onClick={() => setShowSelectionWindow(false)}>
    </div>
    </>
  )
}

export default AlgorithmSelection
