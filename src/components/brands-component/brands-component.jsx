import React from 'react'

import { LeftContent } from '../sorting-component/sorting-elements'
import { SearchInput } from './brand-styles'

const BrandsComponent = () => {
  return (
    <div>
      <h4>Brands</h4>
      <LeftContent>
        <SearchInput type="text" name="name" placeholder="Search Brand" />
        <label>
          <input type="checkbox" /> My Value
        </label>
        <label>
          <input type="checkbox" /> My Value
        </label>
        <label>
          <input type="checkbox" /> My Value
        </label>
        <label>
          <input type="checkbox" /> My Value
        </label>
      </LeftContent>
    </div>
  )
}

export default BrandsComponent
