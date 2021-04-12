import React, {useState} from 'react'
import { mergeSort } from '../algorithms/mergeSort'

const Algorithms = () => {

  const [values, setValues] = useState([3, 4, 1, 5, 2, 9])

  const merge = () => {
    const newValues = mergeSort(values, 0, values.length)
    setValues(newValues)
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
