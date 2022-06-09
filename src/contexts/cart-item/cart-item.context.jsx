import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const apiUrl = 'http://localhost:3004/items'

export function useAPI() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('Context must be used within a Provider')
  }
  return context
}

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
  dataList: [],
  //   cartItems: [],
  addItemToCart: () => {},
  //   removeItemFromCart: () => {},
  //   clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [dataList, setDataList] = useState([])
  //   const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiUrl)
      setDataList(response.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const newCartCount = dataList.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [dataList])

  useEffect(() => {
    const newCartTotal = dataList.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [dataList])

  const addItemToCart = (productToAdd) => {
    setDataList(addCartItem(dataList, productToAdd))
  }

  const value = {
    addItemToCart,
    // cartItems,
    cartCount,
    cartTotal,
    dataList,
    useAPI,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
