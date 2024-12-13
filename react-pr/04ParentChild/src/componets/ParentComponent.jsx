// data from P to C
import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const [info, setInfo] = useState("")

    const data = "Data from Parent to Child"

    const handleClickParent = () => {
        setInfo(data);
    }

  return (
    <div>
        <div>Parent Component</div>
        {
            info ? <h2>Data received from Parent: {info}</h2> : <h2>No data reveived</h2>
        }
        <div>
            <ChildComponent dataPass = {info}/>
        </div>
        <div>
            <button onClick={handleClickParent}>Click to Parent</button>
        </div>
    </div>
  )
}

export default ParentComponent



// // data from C to P 