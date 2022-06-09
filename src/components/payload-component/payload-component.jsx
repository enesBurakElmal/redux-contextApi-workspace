import React, { useContext } from 'react'
import { PayloadContainer } from './payload-styles'

import { CartContext } from '../../contexts/cart-item/cart-item.context'

import CartItem from '../card-item/card-item.component'

const PayloadComponent = ({ cartItem }) => {
  const { cartItems, cartTotal, clearItemFromCart, addItemToCart } =
    useContext(CartContext)

  const addItemHandler = () => addItemToCart(cartItem)

  return (
    <PayloadContainer>
      <div>
        <p>you cart is empty</p>
      </div>
      {cartItems.map((cartItems, index) => (
        <CartItem key={index} cartItem={cartItems}>
          <p>{cartItems.name}</p>
        </CartItem>
      ))}

      <button type="button" onClick={addItemHandler}>
        2010-11 kupasi
      </button>
    </PayloadContainer>
  )
}

export default PayloadComponent
