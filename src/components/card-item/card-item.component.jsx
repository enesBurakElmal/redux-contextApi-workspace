import React from 'react'

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem
  return <h2>{name} </h2>
}

export default CartItem
