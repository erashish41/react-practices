import React from 'react'
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <div>
        <div>
            <h3>Profile Card Challenge</h3>
        </div>
        <ProfileCard
            nameInfo = "Ashish"
            age = {30}
            greeting = {
                <div>
                    <strong>Hi Ashish! have a wonderfull day</strong>
                </div>
            }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>

        <ProfileCard
            nameInfo = "Rajat"
            age = {29}
            greeting = {
                <div>
                    <strong>Hi Rajat! have a great day</strong>
                </div>
            }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>
    </div>
  )
}

export default Profile