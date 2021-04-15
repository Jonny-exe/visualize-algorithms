import React, {useState} from 'react'
import { mergeSort, iterativeMergeSort } from '../algorithms/mergeSort'

const Algorithms = () => {

  const [values, setValues] = useState([9,7,5,4,3,2,1])

  const merge = () => {
    iterativeMergeSort (values, setValues)
    //setValues(newValues)
  }


  return (
    <>
      <div className="algorithms">
        {
          values.map((value, index) => (
            <div className="algorithm-value" key={index} style={{height: `${(value * 10)}%`}}> {value} </div>
          ))
        }
      </div>
      <button className="run-algorithm" onClick={merge}> Merge </button>
    </>
  )
}

export default Algorithms
