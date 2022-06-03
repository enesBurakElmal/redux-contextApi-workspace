import React from 'react'

import Logo from './../../assets/Logo.svg'

import {
  NavbarTag,
  NavbarContainer,
  NavbarLogo,
  NavbarPayload,
  PayloadText,
} from './navbar-elements'

const Navbar = ({ price, setPrice }) => {
  console.log(price)
  return (
    <NavbarTag>
      <NavbarContainer>
        <NavbarLogo src={Logo} alt="logo" />
        <NavbarPayload>
          <PayloadText>
            &#174; &#8378; {price} {setPrice}
          </PayloadText>
        </NavbarPayload>
      </NavbarContainer>
    </NavbarTag>
  )
}

export default Navbar
// return (
//   <NavbarTag>
//     <NavbarContainer>
//       <NavbarLogo src={Logo} alt="Logo" />
//       <NavbarPayload>
//         <PayloadText>&#174; &#8378; 13,97</PayloadText>
//       </NavbarPayload>
//     </NavbarContainer>
//   </NavbarTag>
// )
// }
