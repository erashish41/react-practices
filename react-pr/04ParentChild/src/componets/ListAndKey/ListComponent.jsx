import React, { useState } from 'react'
import ListDetail from './ListDetail'

const ListComponent = () => {

    const newList = ["100", "200", "300", "400", "500"]

    const [selectedItems, SetSelectedItems] = useState(null)

    const handleItemSelect = (data) => {
        SetSelectedItems(data)
    }

  return (
    <div>
        <div>List Component</div>
        <div>
            <ul>
                {
                    newList.map((items, index) => (
                        <li
                            key={index}
                            onClick={() =>handleItemSelect(items)}
                            style={{cursor: 'pointer'}}
                        >
                            {items}
                        </li>
                    ))
                }
            </ul>
        </div>
        <ListDetail passItems = {selectedItems}/>
    </div>
  )
}

export default ListComponent