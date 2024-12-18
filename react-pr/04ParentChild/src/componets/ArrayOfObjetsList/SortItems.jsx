import React, { useState } from 'react'

const SortItems = () => {

    const myList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruit, setFruit] = useState(myList)

    const handleOnClick = () => {
        const sortedList = [...fruit].sort((a,b) => {
            // console.log("a starts",a.value, "b starts",b.value);
            return a.value.localeCompare(b.value)
        })
        setFruit(sortedList)
        console.log("final output", sortedList);
        
    }

  return (
    <div>
        <div>Sorting Items</div>
        <button onClick={handleOnClick}>Sort Fruits</button>
        <ul>
            {
                fruit.map((elm) => (
                    <li key={elm.id}>
                        {elm.value}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default SortItems