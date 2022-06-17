import React, { useContext, useEffect } from 'react'

import { CartContext } from '../../contexts/cart-item.context'

import { LeftContent } from '../sorting-component/sorting-elements'

import styles from './brands-component.module.scss'

import SearchBox from '../search-box/search-box.component'

const BrandsComponent = () => {
  const { productSearchFilter } = useContext(CartContext)

  const handleSearch = (e) => {
    const searchValue = e.target.value
    productSearchFilter(searchValue)
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
