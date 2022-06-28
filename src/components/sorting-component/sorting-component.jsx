import React, { useContext, useEffect, useState } from 'react'

import { CartContext } from '../../contexts/cart-item.context'

import styles from './sorting-component.module.scss'

// export const displayProducts = (products, setProducts, setPageCount, page) => {
//   const startIndex = (page - 1) * 16
//   const endIndex = page * 16
//   const productsToDisplay = products.slice(startIndex, endIndex)
//   setProducts(productsToDisplay)
//   setPageCount(Math.ceil(products.length / 16))
// }

const SortingComponent = (sorting) => {
  const [favorite, setFavorite] = useState('')
  const { lowToHigh, highToLow } = useContext(CartContext)

  const handleLowToHigh = () => {
    lowToHigh(sorting)
    setFavorite('lowToHigh')
  }

  const handleHighToLow = () => {
    highToLow(sorting)
    setFavorite('highToLow')
  }

  const handleNewToOld = () => {
    // tagFilter(sorting)
    setFavorite('newToOld')
  }

  const handleOldToNew = () => {
    setFavorite('oldToNew')
  }

  const RadioButton = ({ label, value, onChange }) => {
    return (
      <div className={styles.radioContent}>
        <label>
          <input type="radio" checked={value} onChange={onChange} />
          {label}
        </label>
      </div>
    )
  }

  return (
    <div>
      <h4> Sorting</h4>{' '}
      <div className={styles.leftContent}>
        <RadioButton
          label="Price low to high"
          value={favorite === 'lowToHigh'}
          onChange={handleLowToHigh}
        />
        <RadioButton
          label="Price high to low"
          value={favorite === 'highToLow'}
          onChange={handleHighToLow}
        />
        <RadioButton
          label="New to old"
          value={favorite === 'newToOld'}
          onChange={handleNewToOld}
        />
        <RadioButton
          label="Old to new"
          value={favorite === 'oldToNew'}
          onChange={handleOldToNew}
        />
        {/* <RadioButton label="Old to new" value={value} onChange={handleChange} /> */}
      </div>
    </div>
  )
}

export default SortingComponent
