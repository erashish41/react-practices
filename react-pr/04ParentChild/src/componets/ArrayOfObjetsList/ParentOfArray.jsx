import React from 'react'
import DispalyList from './DispalyList'
import SelectItemToDisplay from './SelectItemToDisplay'
import DeleteItemFromArray from './DeleteItemFromArray'
import AddItemInArray from './AddItemInArray'
import SortItems from './SortItems'
import FilterItems from './FilterItems'
import FilterByAlphabat from './FilterByAlphabat'

const ParentOfArray = () => {
  return (
    <div>
        <h3>Parent Of Arrays</h3>
        {/* <DispalyList /> */}
        {/* <SelectItemToDisplay /> */}
        {/* <DeleteItemFromArray /> */}
        {/* <AddItemInArray /> */}
        {/* <SortItems /> */}
        {/* <FilterItems /> */}
        <FilterByAlphabat />
    </div>
  )
}

export default ParentOfArray