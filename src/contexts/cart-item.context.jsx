import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = 'http://localhost:3004/items'

const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  const productsToDisplay = products.slice(startIndex, endIndex)
  setProducts(productsToDisplay)
  setPageCount(Math.ceil(products.length / 16))
}

const filtercartItemsWithTags = (cartItems, tags) => {
  return cartItems.filter((cartItem) => {
    return cartItem.tags.some((tag) => tags.includes(tag))
  })
}

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.added === productToAdd.added
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.added === productToAdd.added
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.added === cartItemToRemove.added
  )

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.added !== cartItemToRemove.added
    )
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.added === cartItemToRemove.added
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.added !== cartItemToClear.added)

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  filteredTags: () => {},
  cartCount: 0,
  cartTotal: 0,
  products: [],
  setProducts: () => {},
  // pageCount: 0,
  // currentPage: 1,
  // setPageCount: () => {},
  // setCurrentPage: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  useEffect(() => {
    axios // get all products
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const filteredTags = (tags) => {
    setProducts(filtercartItemsWithTags(products, tags))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    filteredTags,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
    setProducts,
    products,
    // pageCount,
    // currentPage,
    // setCurrentPage,
    // setPageCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
