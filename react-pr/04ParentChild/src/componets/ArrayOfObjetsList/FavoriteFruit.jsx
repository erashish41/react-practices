import React, { useState } from 'react'

const FavoriteFruit = () => {

    const myList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruit, setFruit] = useState([])

    function toggleFruit(data) {
        console.log('<<<<< i am calling b4 conditions >>>>>>', data)
        console.log('>> fruits', fruit)
        if (fruit.includes(data)){
            console.log('If condition works')
            const updatedFruit = fruit.filter((elm) => elm !== data)
            setFruit(updatedFruit);

        } else {
            setFruit([...fruit, data])
            console.log('>>> after fruit seted >>>', fruit)
        }
    }

    function handleClearFavorite(){
        setFruit([]);
        
    }


  return (
    <div>
        <div>Click your Favorite Fruit</div>
        <ul>
            {
                myList.map((item) => {
                    {/* console.log('>>>> item data :', item) */}
                    return (
                        <li
                            key={item.id}
                            onClick={() => toggleFruit(item.value)}
                            style={{
                                cursor:'pointer',
                                color: fruit.includes(item.value) ? "orange" : "black"
                                }}
                        >{item.value}</li>
                    )
                })
            }
        </ul>
        <button onClick={handleClearFavorite}>Clear Favorite</button>
        <p>Favorite fruit: {fruit.join(", ")}</p>
        <p>Total Favorite fruit: {fruit.length}</p>
    </div>
  )
}

export default FavoriteFruit