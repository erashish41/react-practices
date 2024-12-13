import React from 'react'

const WelcomeUser = (props) => {

  const {onMouseButton, onMouseEnter} = props

  const handleClick = () => {
    console.log(`hey user, have great day`);
    onMouseButton();
  }

  return (
    <>
      <div>WelcomeUser</div>
      <div>
        <button onClick={onMouseButton}>Click me</button>
        <button onMouseEnter={onMouseEnter}>Hover me</button>
        <button onClick={handleClick}>Greetings</button>
      </div>
    </>
  )
}

export default WelcomeUser