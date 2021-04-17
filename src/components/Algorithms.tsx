import React, {useState} from 'react'
import { iterativeMergeSort } from '../algorithms/mergeSort'
import { iterativeQuickSort } from '../algorithms/quickSort'

interface Props {
  algorithmType: string;
}

const Algorithms: React.FC<Props> = ({algorithmType}) => {

  const [values, setValues] = useState([9,7,5,4,3,2,1])
  const [finished, setFinished] = useState(false)

  const merge = () => {
    switch(algorithmType) {
      case "mergesort":
        iterativeMergeSort(values, setValues, setFinished)
        break;

      case "quicksort":
        iterativeQuickSort(values, setValues)
        break

    }
  }

  return (
    <>
    <div className={`algorithms ${finished ? "finished" : ""}`}>
    <div className={`columns`}>
    {
      values.map((value, index) => (
      <>
      <div className="algorithm-value-container" key={index} style={{height: `${(value * 9 + 10)}%`}}>
      <div className="algorithm-value"></div>
      </div>
      </>
    ))
    }
    </div>
    <div className={`values`}>
    {
      values.map((value, index) => (
      <>
      <div className="value-item" key={index}> 
      {value}
      </div>
      </>
    ))
    }
    </div>
    </div>
      <button className="run-algorithm" onClick={merge}> Merge </button>
    </>
  )
}

export default Algorithms
