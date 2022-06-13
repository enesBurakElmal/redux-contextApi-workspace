import React, { useCallback } from 'react'
import { useState } from 'react'

import Logo from './../../assets/Logo.svg'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-item.context'

import Checkout from '../checkout/checkout.component'

import styles from './navbar-component.module.scss'

import {
  NavbarTag,
  NavbarContainer,
  NavbarLogo,
  NavbarPayload,
  PayloadText,
} from './navbar-elements'

// console.log(parsedData)

const Navbar = ({ totalPrice }) => {
  const { cartTotal } = useContext(CartContext)

  return (
    <NavbarTag>
      <NavbarContainer>
        <NavbarLogo src={Logo} alt="logo" className={styles.enes} />
        <NavbarPayload>
          <PayloadText value={cartTotal}>
            &#174; &#8378; {cartTotal}
          </PayloadText>
        </NavbarPayload>
      </NavbarContainer>
    </NavbarTag>
  )
}

export default Navbar
