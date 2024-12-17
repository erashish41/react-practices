import React, { useState } from 'react'

const AddItemInArray = () => {

    const initialList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruit, setFruit] = useState(initialList);
    const [newFruit, setNewFruit] = useState("")

    const handleOnClick = () => {
        if(newFruit.trim() !== ""){
            setFruit((prevFruit) => [...prevFruit, {id: Date.now().toString(), value: newFruit}])
            setNewFruit("") // used to clear after adding
        }
    }

  return (
    <div>
        <div>Add Item In Array</div>
        <input 
            type='text'
            value={newFruit}
            placeholder='add new fruit'
            onChange={(e) => setNewFruit(e.target.value)}
        />
        <button onClick={handleOnClick}>Add fruit</button>
        <ul>
            {
                fruit.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.value}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default AddItemInArray