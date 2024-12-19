// to find the fruit by searching them with user input
import React, { useState } from 'react'

const FilterByAlphabat = () => {

    const myList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruit, setFruit] = useState([]);
    const [findFruit, setFindFruit] = useState("");

    const handleOnChange = (e) => {
        const userInput = e.target.value.trim().toLowerCase()   // to get user input
        setFindFruit(userInput)
        // console.log(userInput);

        if(userInput === ""){
            setFruit([]);
        }else{
            const resultFruit = myList.filter((elm) => (
                elm.value.toLowerCase().startsWith(userInput)
            ))
            setFruit(resultFruit);
            console.log(resultFruit);
        }
        
    }

  return (
    <div>
        <div>Filter By Alphabat</div>
        <input 
            type='text'
            placeholder='enter any alphabet...'
            value={findFruit}
            onChange={handleOnChange}
        />
        <ul>
            {
                fruit.length > 0 
                ? fruit.map((item) => {
                    return ( 
                        <li key={item.id}>{item.value}</li>
                    )
                })
                : <p>No matching fruit</p>
            }
            {/* {console.log(fruit.length)} */}

        </ul>
    </div>
  )
}

export default FilterByAlphabat