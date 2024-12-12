// // Parent to Child passing data
import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

// const ParentComponent = () => {
    
//     const [data, setData] = useState('');

//     const parentToChild = () => {
//         setData("data from Parent to Child");
//     }

//   return (
//     <div>
//         <ChildComponent parentToChild={data}/>

//         <div>
//             <button onClick={() => parentToChild()}>Click on Parent</button>
//         </div>
//     </div>
//   )
// }

// export default ParentComponent



// Child to Parent passing data
const ParentComponent = () => {    

    const [info, setInfo] = useState('')
  
    const process = (data) => {
        setInfo(data)
        console.log(`hello data is: ${data}`);
        
    }

  return (
    <div>
            <div>ParentComponent</div>
            <div>
                {
                    info ? <h2>data from child is {info}</h2> : <h2>no data is shown</h2>
                }
            </div>
            <div>
                <ChildComponent handleProcess={process}/>
            </div>
    </div>
  )
}

export default ParentComponent