// // data from P to C
// import React from 'react'

// const ChildComponent = ({dataPass}) => {
//   return (
//     <div>
//         <div>Child Component</div>
//         <div>
//             {
//                 dataPass ? <h2>Data is passed from Parent: {dataPass}</h2> : <h2>No data passed from Parent</h2>
//             }
//         </div>
//     </div>
//   )
// }

// export default ChildComponent




// // data from C to P 
import React from 'react'

const ChildComponent = ({sendDataToParent}) => {
    const childData = "Hello from Child"


    const handleClickChild = () => {
        sendDataToParent(childData) // call the callback function
    }

  return (
    <div>
        <div>ChildComponent</div>
        <div>
            <button onClick={handleClickChild}>Send Data from C to P</button>
        </div>
    </div>
  )
}

export default ChildComponent
