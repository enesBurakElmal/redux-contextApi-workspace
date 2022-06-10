import React, { useCallback } from 'react'
import { useState } from 'react'

import Logo from './../../assets/Logo.svg'

import Checkout from '../checkout/checkout.component'

import {
  NavbarTag,
  NavbarContainer,
  NavbarLogo,
  NavbarPayload,
  PayloadText,
} from './navbar-elements'

// console.log(parsedData)

const Navbar = ({ totalPrice, cartItems }) => {
  const [price, setPrice] = useState(0)
  // console.log(totalPrice, cartItems)

  const navbarPrice = JSON.parse(localStorage.getItem('cart2'))

  return (
    <NavbarTag>
      <NavbarContainer>
        <NavbarLogo src={Logo} alt="logo" />
        <NavbarPayload>
          <PayloadText value={totalPrice}>
            &#174; &#8378; {navbarPrice}
          </PayloadText>
        </NavbarPayload>
      </NavbarContainer>
    </NavbarTag>
  )
}

export default Navbar
