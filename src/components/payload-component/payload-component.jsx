import React, { useEffect, useRef, useState } from 'react'
import { PayloadContainer } from './payload-styles'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import CartItem from '../card-item/card-item.component'

const PayloadComponent = () => {
  const cartItem = useSelector(selectCartItems)

  const dispatch = useDispatch()
  const cartItemss = useSelector(selectCartItems)

  const addItemHandler = () =>
    dispatch(
      addItemToCart(
        cartItem.map((item) => {
          return {
            ...item,
            quantity: 1,

            price: item.price * item.quantity,
          }
        })
      )
    )
  return (
    <PayloadContainer>
      <div>
        {cartItem.length ? (
          cartItem.map((item, index) => (
            <p key={index} cartitem={item}>
              SA {item.price} {item.name} {item.quantity} {item.price}
            </p>
          ))
        ) : (
          // <div key={index}>
          //   <CartItem cartItem={item} />
          //   <div>{item.price}</div>
          // </div>
          <p>you cart is empty</p>
        )}
      </div>
      <button onClick={addItemHandler}>2010-11 kupasi</button>
    </PayloadContainer>
  )
}

// useEffect(() => {
//   const cartData = JSON.parse(localStorage.getItem('cart'))
//   setCartItems(cartData)
// }, [])

// setTimeout(
//   () => {
//     const cartData = JSON.parse(localStorage.getItem('cart'))
//     setCartItems(cartData)
//     setTotalPrice(cartData.reduce((total, item) => total + item.price, 0))
//   },
//   [],
//   1000
// )

// const categoriesMap = useSelector(selectCategoriesMap)

// class PayloadComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cartItems: [],
//       totalPrice: 0,
//     }

//     this.handlePriceProps = this.handlePriceProps.bind(this)
//   }

// componentDidMount() {
//   const cartData = JSON.parse(localStorage.getItem('cart'))
//   if (cartData) {
//     this.setState({ cartItems: cartData })
//     this.setState({
//       totalPrice: cartData.reduce((acc, item) => {
//         return acc + item.price
//       }, 0),
//     })
//   }
//   const { cartData } = useContext(CartContext)
// }

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

//   testStorage = () => {
//     const price = this.state.cartItems.reduce((acc, item) => {
//       return acc + item.price
//     }, 0)
//     localStorage.setItem('cart2', JSON.stringify(price))
//   }

//   render() {
//     const { cartItems, totalPrice } = this.state
//     const testStorage = this.testStorage
//     console.log(totalPrice, cartItems)

//     window.onload = () => {
//       testStorage()
//     }

//     return (
//       <PayloadContainer onLoadedData={testStorage}>
//         {cartItems.map((item, index) => (
//           <div key={index}>
//             <CartItem cartItem={item} />
//             <div>{item.price}</div>
//             <div>{totalPrice}</div>
//           </div>
//         ))}
//         <button>2010-11 kupasi</button>
//       </PayloadContainer>
//     )
//   }
// }

export default PayloadComponent
