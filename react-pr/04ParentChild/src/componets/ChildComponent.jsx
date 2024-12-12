// // Parent to Child passing data
// import React from 'react'

// const ChildComponent = ({parentToChild}) => {
//   return (
//     <div>
//         <div>Child Component</div>
//         <div>{parentToChild}</div>
//     </div>
    
//   )
// }

// export default ChildComponent

// Child to Parent passing data
import React from 'react'

const ChildComponent = (props) => {
    const data = "Data from Child to Parent"
  return (
    <div>
            <div>ChildComponent</div>
          <button onClick={() =>props.handleProcess(2000)}>Click to Child</button>  
    </div>
  )
}

export default ChildComponent