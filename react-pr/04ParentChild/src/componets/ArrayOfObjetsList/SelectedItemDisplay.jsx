import React from 'react'

const SelectedItemDisplay = ({fruitsToDisplay}) => {
  return (
    <div>
        <div>Selected Item Display</div>
        {
            fruitsToDisplay  
            ? <p>Clicked fruit: id-{fruitsToDisplay.id}, value-{fruitsToDisplay.value}</p> 
            : <p>Click any fruit to display its property </p>
        }
    </div>
  )
}

export default SelectedItemDisplay