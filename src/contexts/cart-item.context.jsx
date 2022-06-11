import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = 'http://localhost:3004/items'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  data: [],
})

export const CartProvider = ({ children }) => {
  // const [data, setData] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  // console.log(data)

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axios.get(apiUrl)
  //     setCartItems(data)
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = {
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    // data,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
