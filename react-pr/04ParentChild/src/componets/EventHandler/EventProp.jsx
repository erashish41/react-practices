import React from 'react'
import WelcomeUser from './WelcomeUser'

const EventProp = () => {

    const handleParent = (user) => {
        alert(`hey ${user}, how are you`)
    }

    const handleMouse = () => {
        alert(`hello, to everyOne`)
    }

  return (
    <>
        <div>EventProp</div>
        <div>
            <WelcomeUser 
                onMouseButton={() => handleParent("ashish")}
                onMouseEnter={handleMouse}
                />
        </div>
    </>
  )
}

export default EventProp