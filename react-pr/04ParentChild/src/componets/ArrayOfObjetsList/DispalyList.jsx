import React, { useState } from 'react'

const DispalyList = () => {

    const myList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [list, setList] = useState(null)
      
  return (
    <div>
        <div>Dispaly List</div>
        <ul>
            {
                myList.map((items) => {
                    return (
                        <li key={items.id}>{items.value}</li>
                        )
                })
            }
        </ul>
    </div>
  )
}

export default DispalyList