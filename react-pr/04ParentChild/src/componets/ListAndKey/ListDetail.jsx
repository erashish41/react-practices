import React from 'react'

const ListDetail = ({passItems}) => {
  return (
    <div>
        <div>List Detail</div>
        {
            passItems ? <p>you passed items: {passItems}</p> : <p>Please pass the items from the list</p>
        }
    </div>
  )
}

export default ListDetail