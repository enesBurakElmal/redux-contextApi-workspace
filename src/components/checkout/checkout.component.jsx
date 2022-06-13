import { useContext, useEffect, useState } from 'react'

import { PayloadContainer } from './checkout-styles'
import styles from './checkout-component.module.scss'

import { CartContext } from '../../contexts/cart-item.context'

import CartItem from '../cart-item/cart-item.component'

const PayloadComponent = (payload) => {
  const {
    cartItems,
    cartTotal,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
  } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(payload)

  return (
    <div className={styles.payloadContainer}>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <CartItem key={index} cartItem={item}></CartItem>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className={styles.buyContent}>
        <button
          className={styles.buyButton}
          type="button"
          onClick={addProductToCart}
        >
          {cartTotal}
        </button>
      </div>
    </div>
  )
}

export default PayloadComponent
