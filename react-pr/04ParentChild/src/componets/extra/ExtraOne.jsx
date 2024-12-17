import React, { useState } from 'react'
import ExtraTwo from './ExtraTwo'

const ExtraOne = () => {

    const myList = ['avocado', 'blueberry', 'strawberry', 'apple', 'orange']


    const [fruits, setFruits] = useState([])

    const handleOnClick = (data) => {
      setFruits((prevFruits) => {
        if(!prevFruits.includes(data)){
            return [...prevFruits, data]
        }
        return prevFruits
      })
    }


  return (
    <div>
        <div>Extra One</div>
        <ul>
            {
                myList.map((items, index) => {
                    return (
                        <li 
                            key={index}
                            onClick={() => handleOnClick(items)}
                            style={{cursor: 'pointer'}}>
                                {items}
                            </li>
                          )
                  } )
            }
        </ul>
        <ExtraTwo passInfo={fruits}/>
        {/* {console.log("fruits..",fruits)} */}
    </div>
  )
}

export default ExtraOne