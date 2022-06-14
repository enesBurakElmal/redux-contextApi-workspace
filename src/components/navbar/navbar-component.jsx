import React from 'react'

import Logo from './../../assets/Logo.svg'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-item.context'

import styles from './navbar-component.module.scss'

const Navbar = () => {
  const { cartTotal } = useContext(CartContext)

  return (
    <nav className={styles.navbarTag}>
      <div className={styles.navbarContainer}>
        <div className={styles.nullDiv} />
        <div className={styles.logoDiv}>
          <img src={Logo} alt="logo" className={styles.navbarLogo} />
        </div>
        <div className={styles.navbarPayload}>
          <p className={styles.payloadText} value={cartTotal}>
            &#174; &#8378; {cartTotal}
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
