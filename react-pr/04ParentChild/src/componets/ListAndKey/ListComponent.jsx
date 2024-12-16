import React, { useState } from 'react'
import ListDetail from './ListDetail'

const ListComponent = () => {

    const newList = ["100", "200", "300", "400", "500"]

    const [selectedItems, SetSelectedItems] = useState(null)
    // console.log(selectedItems);
        

    const handleItemSelect = (infoReceived) => {
        // infoReceived is passed as props
        SetSelectedItems(infoReceived)
        // console.log('data infoReceived is : ',infoReceived);
        
    }

  return (
    <div>
        <div>List Component</div>
        <div>
            <ul>
                {
                    newList.map((items, index) => {
                        {/* console.log("items :", items,", index :", index) */}
                        return (
                        <li key={index} onClick={() =>handleItemSelect(items)} style={{cursor: 'pointer'}}>
                            {/* items are passed as argument */}
                            {console.log("hi..", items )}
                            {items}
                        </li>)
                })
                }
            </ul>
        </div>
        <ListDetail passItems = {selectedItems}/>
    </div>
  )
}

export default ListComponent

// items and index in map method are passed as argument and passed automatically by map method.