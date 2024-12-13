// // data from P to C
import React from 'react'

const ChildComponent = ({dataPass}) => {
  return (
    <div>
        <div>Child Component</div>
        <div>
            {
                dataPass ? <h2>Data is passed from Parent: {dataPass}</h2> : <h2>No data passed from Parent</h2>
            }
        </div>
    </div>
  )
}

export default ChildComponent



// // data from C to P 
