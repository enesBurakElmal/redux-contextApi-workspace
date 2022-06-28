import React, { useContext, useEffect } from 'react'

import { CartContext } from '../../contexts/cart-item.context'

import { LeftContent } from '../sorting-component/sorting-elements'

import styles from './brands-component.module.scss'

import SearchBox from '../search-box/search-box.component'

const BrandsComponent = (e) => {
  const { filteredTags,setSearchfield } = useContext(CartContext)

  const handleSearch = (e) => {
    filteredTags(e.target.value)
    setSearchfield(e.target.value)
  }
  return (
    <div>
      <h4>Brands</h4>
      <LeftContent>
        <SearchBox searchChange={handleSearch} />
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
