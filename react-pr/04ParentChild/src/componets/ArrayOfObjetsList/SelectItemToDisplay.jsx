// select item and display data of that item
import React, { useState } from 'react'
import SelectedItemDisplay from './SelectedItemDisplay';

const SelectItemToDisplay = () => {

    const myList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruits, setFruits] = useState(null)

    const handleOnClickItem = (data) => {
        setFruits(data)
        console.log("hi...",data);
        
    }


  return (
    <div>
        <div>Select Item To Display</div>
        <ul>
            {
                myList.map((item) => {
                    return (
                        <li 
                            key={item.id}
                            onClick={() => handleOnClickItem(item)}
                            style={{cursor: 'pointer'}}
                        >
                        {/* {console.log("heello", items)} */}
                            {item.value} 
                        </li>
                    )
                })
            }
        </ul>

        <SelectedItemDisplay fruitsToDisplay = {fruits}/>
    </div>
  )
}

export default SelectItemToDisplay