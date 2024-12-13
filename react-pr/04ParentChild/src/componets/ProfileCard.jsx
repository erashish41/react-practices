import React from 'react'

const ProfileCard = (props) => {
    const {nameInfo, age, greeting, children} = props
  return (
    <div>
        <div>ProfileCard</div>
        <div>
            <h2>Name: {nameInfo}</h2>
            <p>Age : {age}</p>
            <p>Greeting: {greeting}</p>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default ProfileCard