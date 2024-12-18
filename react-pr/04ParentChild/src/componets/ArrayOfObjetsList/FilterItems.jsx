import React, { useState } from 'react'

const FilterItems = () => {

    const myList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruit, setFruit] = useState(myList);
    const [search, setSearch] = useState("");

    const handleOnChange = (searchValue) => {
        setSearch(searchValue)
        // console.log(searchValue);

        const itemFilter = myList.filter((item) => item.value.includes(searchValue))
        setFruit(itemFilter)
        // console.log(itemFilter);
        
        
    }

  return (
    <div>
        <div>Filter Items</div>
        <input
            type='text'
            placeholder='search fruit'
            onChange={(e) => handleOnChange(e.target.value)}
            value={search} />
        <ul>
            {
                fruit.map((elm) => 
                <li key={elm.id}>
                    {elm.value}
                </li>)
            }
        </ul>
    </div>
  )
}

export default FilterItems