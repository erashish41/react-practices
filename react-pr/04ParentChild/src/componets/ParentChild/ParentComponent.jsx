// // data from P to C
// import React, { useState } from 'react'
// import ChildComponent from './ChildComponent'

// const ParentComponent = () => {

//     const [info, setInfo] = useState("")

//     const data = "Data from Parent to Child"

//     const handleClickParent = () => {
//         setInfo(data);
//     }

//   return (
//     <div>
//         <div>Parent Component</div>
//         {
//             info ? <h2>Data received from Parent: {info}</h2> : <h2>No data reveived</h2>
//         }
//         <div>
//             <ChildComponent dataPass = {info}/>
//         </div>
//         <div>
//             <button onClick={handleClickParent}>Click to Parent</button>
//         </div>
//     </div>
//   )
// }

// export default ParentComponent




// // data from C to P 
import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const [childInfo, setChildInfo] = useState('')

    // define a callback function
    const handleDataFromChild = (childData) => {
        setChildInfo(childData)     // update the Parent's state with receiving data
    }

  return (
    <div>
        <div>ParentComponent</div>
        <div>
            {
                childInfo ? <h2>Data to Parent: {childInfo}</h2> : <h2>No data from Child</h2>
            }
        </div>
        {/* pass the callback function as props in Child */}
        <div>
            <ChildComponent sendDataToParent={handleDataFromChild}/>
        </div>
    </div>
  )
}

export default ParentComponent