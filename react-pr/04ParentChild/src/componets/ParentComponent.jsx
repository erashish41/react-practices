// // data from P to C
// import React, { useState } from 'react'
// import ChildComponent from './ChildComponent'

// const ParentComponent = () => {

//     const [info, setInfo] = useState("")

//     const data = "data from P to C";

//     const handleClickParent = () => {
//         setInfo(data)
//         // console.log(data);
        
//     }

//   return (
//     <div>
//             <div>ParentComponent</div>
//             <div>
//                 {
//                     info ? <h2>info is here</h2> : <h2>no info</h2>
//                 }
//             </div>
//             <ChildComponent handleClickParent={info}/>
//             <div>
//                 <button onClick={() => handleClickParent()}> Click to Parent</button>
//             </div>
//     </div>
//   )
// }

// export default ParentComponent



// data from C to P 
import React from 'react'

const ParentComponent = () => {
  return (
    <div>ParentComponent</div>
  )
}

export default ParentComponent