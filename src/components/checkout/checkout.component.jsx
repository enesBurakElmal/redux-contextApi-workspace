import { useContext, useEffect, useState } from 'react'
import { PayloadContainer } from './payload-styles'

import { CartContext } from '../../contexts/cart-item.context'

import CartItem from '../card-item/card-item.component'

const PayloadComponent = () => {
  const { cartItems, cartTotal, cartCount } = useContext(CartContext)

  console.log(cartCount)

  return (
    <PayloadContainer>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <CartItem key={index} cartItem={item} cartCount={cartCount}>
            <h2>Total: {cartTotal}</h2>
          </CartItem>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      <button type="button">2010-11 kupasi</button>
    </PayloadContainer>
  )
}

export default PayloadComponent
