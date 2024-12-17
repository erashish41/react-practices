import React from 'react'

const ExtraTwo = ({passInfo}) => {
  return (
    <div>
        <div>Extra Two</div>
        {
            passInfo.length > 0 ? <p>hello passed: {passInfo.join(", ")}</p> : <p>check passed</p>
        }
        {console.log("end..", passInfo)}
    </div>
  )
}

export default ExtraTwo