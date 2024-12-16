import React from 'react'

const ListDetail = ({passItems}) => {
  // console.log("received items..", passItems);
  
  
  return (
    <div>
        <div>List Detail</div>
        {
            passItems ? <p>you passed items: {passItems}</p> : <p>Please pass the items from the list</p>
            
        }
        {/* {console.log("heeloo...", passItems)} */}
    </div>
  )
}

export default ListDetail