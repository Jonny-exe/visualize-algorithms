import React from 'react'

const Algorithms = () => {

  const values = [3, 4]

  return (
    <div className="algorithms">
      {
        values.map((value, index) => (
          <h3 className="algorithm-value" key={index}> value </h3>
        ))
      }
    </div>
  )
}

export default Algorithms
