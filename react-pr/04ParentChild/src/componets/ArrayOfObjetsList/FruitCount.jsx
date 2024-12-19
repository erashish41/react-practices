import React from 'react';

const myList = [
  { id: 'e', value: 'avocado' },
  { id: 'd', value: 'blueberry' },
  { id: 'c', value: 'strawberry' },
  { id: 'a', value: 'apple' },
  { id: 'b', value: 'orange' },
];

const FruitCount = () => {

  return (
    <div>
      <h2>Fruit Count</h2>
      <p>Total Number of Fruits: {myList.length}</p>
      <ul>
        {myList.map((fruit) => (
          <li key={fruit.id}>{fruit.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitCount;
