import React, { useContext } from 'react'

import { CartContext } from '../../contexts/cart-item.context'

import styles from './sorting-component.module.scss'

const SortingComponent = () => {
  const [favorite, setFavorite] = React.useState('lowToHigh')
  const { filteredTags, products, setProducts } = useContext(CartContext)

  // const addProductToCart = () => addItemToCart(cartItem)
  const filteer = () => filteredTags(test)

  const handleLowToHigh = () => {
    setFavorite('lowToHigh')
  }

  const handleHighToLow = () => {
    setFavorite('highToLow')
  }

  const handleNewToOld = () => {
    setFavorite('newToOld')
  }

  const handleOldToNew = () => {
    setFavorite('oldToNew')
  }

  const RadioButton = ({ label, value, onChange }) => {
    const filteer = () => filteredTags()
    return (
      <div className={styles.radioContent}>
        <label>
          <input
            type="radio"
            checked={value}
            onChange={onChange}
            onClick={filteer}
          />
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
          onClick={filteer}
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
