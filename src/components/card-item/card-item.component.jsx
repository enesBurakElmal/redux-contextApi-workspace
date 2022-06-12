import React from 'react'

const CartItem = ({ cartItem, cartCount }) => {
  const { name, quantity, price } = cartItem

  console.log(cartItem, 'cartItem')
  return (
    <>
      <h2>{name}</h2>
      <span>{price}</span>
      <p>{quantity}</p>
    </>
  )
}

export default CartItem
