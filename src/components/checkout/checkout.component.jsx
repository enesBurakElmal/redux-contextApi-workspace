import { useContext } from 'react'
import { PayloadContainer } from './payload-styles'

import { CartContext } from '../../contexts/cart-item.context'

import CartItem from '../card-item/card-item.component'

const PayloadComponent = () => {
  const { cartItems, cartTotal, data } = useContext(CartContext)

  return (
    <PayloadContainer>
      {cartItems.map((item, index) => (
        <CartItem key={index} cartItem={item} />
      ))}

      <button type="button">2010-11 kupasi $</button>
    </PayloadContainer>
  )
}

export default PayloadComponent
