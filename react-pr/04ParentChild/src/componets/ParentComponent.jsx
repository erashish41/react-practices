import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    
    const [data, setData] = useState('');

    const parentToChild = () => {
        setData("hello kki hal chal");
    }

  return (
    <div>
        <ChildComponent parentToChild={data}/>

        <div>
            <button onClick={() => parentToChild()}>Click on Parent</button>
        </div>
    </div>
  )
}

export default ParentComponent