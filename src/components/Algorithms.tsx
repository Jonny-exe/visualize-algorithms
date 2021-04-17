import React, {useState} from 'react'
import { iterativeMergeSort } from '../algorithms/mergeSort'

const Algorithms = () => {

  const [values, setValues] = useState([9,7,5,4,3,2,1])
  const [finished, setFinished] = useState(false)

  const merge = () => {
    iterativeMergeSort(values, setValues, setFinished)
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
