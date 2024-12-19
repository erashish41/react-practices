// by clicking on fruit it will become favorite (red color)
import React, { useState } from 'react'

const FavroiteFruit = () => {

    const myList = [
        { id: 'e', value: 'avocado' },
        { id: 'd', value: 'blueberry' },
        { id: 'c', value: 'strawberry' },
        { id: 'a', value: 'apple' },
        { id: 'b', value: 'orange' },
    ];

    const [fruit, setFruit] = useState([]);

    const handleOnClick = (info) => {
        if(fruit.includes(info)){
            setFruit(fruit.filter((elm) => elm !== info))
        }else{
            setFruit([...fruit, info])
            console.log("hello first", [...fruit]);
            
        }
    }

  return (
    <div>
        <div>Favroite Fruit</div>
        <ul>
            {
                    myList.map((item) => {
                        return (
                            <li 
                            key={item.value}
                            onClick={() => handleOnClick(item.value)}   // pass item.value here
                            style={{
                                cursor: 'pointer',
                                color: fruit.includes(item.value) ? "orange" : "black" 
                                }}
                            >{item.value}</li>
                        )
                    })
                 
            }
        </ul>
        <p>Favroite fruit is: {fruit.join(", ")}</p>
    </div>
  )
}

export default FavroiteFruit