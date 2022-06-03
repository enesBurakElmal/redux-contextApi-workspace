import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { PayloadContainer } from './payload-styles'

import CartItem from '../card-item/card-item.component'

class PayloadComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      totalPrice: 0,
    }

    // this.handlePriceProps = this.handlePriceProps.bind(this)
  }

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem('cart'))
    if (cartData) {
      this.setState({ cartItems: cartData })
      this.setState({
        totalPrice: cartData.reduce((acc, item) => {
          return acc + item.price
        }, 0),
      })
    }
  }

  // handlePriceProps = (price) => {
  //   this.setState(
  //     {
  //       totalPrice: this.state.totalPrice + price,
  //     },
  //     () => {
  //       console.log(this.state.totalPrice)
  //     }
  //   )
  // }

  testStorage = () => {
    const price = this.state.cartItems.reduce((acc, item) => {
      return acc + item.price
    }, 0)
    localStorage.setItem('cart2', JSON.stringify(price))
  }

  render() {
    const { cartItems, totalPrice } = this.state
    const testStorage = this.testStorage
    console.log(totalPrice, cartItems)

    window.onload = () => {
      testStorage()
    }

    return (
      <PayloadContainer onLoadedData={testStorage}>
        {cartItems.map((item, index) => (
          <div key={index}>
            <CartItem cartItem={item} />
            <div>{item.price}</div>
            <div>{totalPrice}</div>
          </div>
        ))}
        <button>2010-11 kupasi</button>
      </PayloadContainer>
    )
  }
}

// const PayloadComponent = () => {
//   const [cartItems, setCartItems] = useState([])
//   const [totalPrice, setTotalPrice] = useState(0)

//   const myPreviousState = useRef(cartItems)

//   const usePrevious = (value) => {
//     const ref = useRef()
//     useEffect(() => {
//       ref.current = value
//     })
//     return ref.current
//   }

//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem('cart'))
//     setCartItems(cartData)
//   }, [])

//   setTimeout(
//     () => {
//       const cartData = JSON.parse(localStorage.getItem('cart'))
//       setCartItems(cartData)
//       setTotalPrice(cartData.reduce((total, item) => total + item.price, 0))
//     },
//     [],
//     1000
//   )

//   return (
//     <PayloadContainer>
//       {cartItems?.map((item, index) => (
//         <div key={index}>
//           <CartItem cartItem={item} />
//           <div>{item.price}</div>
//         </div>
//       ))}
//       <button>2010-11 kupasi</button>
//     </PayloadContainer>
//   )
// }

// class PayloadComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cartItems: [],
//       totalPrice: 0,
//     }

//     // this.addToCart = this.addToCart.bind(this)
//   }

//   componentDidMount() {
//     const cartItems = JSON.parse(localStorage.getItem('cart'))
//     this.setState({ cartItems })
//     this.setState({
//       totalPrice: cartItems.reduce((acc, item) => acc + item.price, 0),
//     })
//   }

//   totalPrices = () => {
//     const { cartItems } = this.state
//     let totalPrice = 0
//     cartItems.forEach((item) => {
//       totalPrice += item.price
//     })
//     this.setState({ totalPrice })
//   }

//   render() {
//     const { cartItems, totalPrice } = this.state
//     return (
//       <PayloadContainer>
//         {cartItems?.map((item, index) => (
//           <div key={index}>
//             <CartItem cartItem={item} />
//             <div>{item.price}</div>
//           </div>
//         ))}
//         <button>2010-11 kupasi</button>
//       </PayloadContainer>
//     )
//   }
// }

export default PayloadComponent
