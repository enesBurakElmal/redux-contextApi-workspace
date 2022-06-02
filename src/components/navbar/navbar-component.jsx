import React from 'react'

import {
  NavbarTag,
  NavbarContainer,
  NavbarLogo,
  NavbarPayload,
  PayloadText,
} from './navbar-elements'

const Navbar = () => {
  return (
    // <NavbarTag>
    <NavbarContainer>
      <NavbarLogo>Navbar</NavbarLogo>
      <NavbarPayload>
        <PayloadText>&#174; &#8378; 13,97</PayloadText>
      </NavbarPayload>
    </NavbarContainer>
    // </NavbarTag>
  )
}

export default Navbar
