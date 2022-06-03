import React, { useEffect } from 'react'
import { useState } from 'react'
import { PayloadContainer } from './payload-styles'

import CartItem from '../card-item/card-item.component'

const PayloadComponent = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // Load the todos on mount
    const cartData = JSON.parse(localStorage.getItem('cart'))

    setCartItems(cartData)

    console.log('cardItems', cartData)
  }, [cartItems])

  return (
    <PayloadContainer>
      {cartItems?.map((item, index) => (
        <div>
          <CartItem cartItem={item} key={index} />
          <div>{item.price}</div>
        </div>
      ))}
      <button>Payload Component</button>
    </PayloadContainer>
  )
}

export default PayloadComponent
