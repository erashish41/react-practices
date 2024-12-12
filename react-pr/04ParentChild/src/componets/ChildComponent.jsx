import React from 'react'

const ChildComponent = ({parentToChild}) => {
  return (
    <div>
        <div>Child Component</div>
        <div>{parentToChild}</div>
    </div>
    
  )
}

export default ChildComponent