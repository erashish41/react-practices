import React, { useState } from 'react'

const DeleteItemFromArray = () => {

    const initialList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruit, setFruit] = useState(initialList)

    const handleOnClick= (id) => {
        const updatedFruits = fruit.filter((elm) => elm.id !== id);
        setFruit(updatedFruits)
        console.log("result...", updatedFruits);
        
    }

  return (
    <div>
        <div>Delete Item From Array</div>
        <ul>
            {
                initialList.map((item) => {
                    return (
                        <li 
                            key={item.id}
                            style={{cursor: 'pointer'}}
                            onClick={() => handleOnClick(item.id)}
                        >
                            {item.value}{" "}
                            <button onClick={() => handleOnClick(item.id)}>delete fruit</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default DeleteItemFromArray