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

const lowToHighFilter = (products) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price)
  return sortedProducts
}

const filtercartItemsWithTags = (products, searchfield) => {
  const filteredProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  console.log(filteredProducts, 'current products after search')
  return filteredProducts
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
  setPaginationItems: () => {},
  paginationItems: [],
  lowToHigh: () => {},
  pageCount: 0,
  currentPage: 1,
  setPageCount: () => {},
  setCurrentPage: () => {},
  displayProducts: () => {},
  lowToHighFilter: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [paginationItems, setPaginationItems] = useState([])
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
    axios // fetch all products
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  // useEffect(() => {
  //   displayProducts(products, setProducts, setPageCount, currentPage)
  // }, [])

  // useEffect(() => {
  //   setProducts(lowToHighFilter(products))
  // }, [products])

  // useEffect(() => {
  //   displayProducts(
  //     lowToHighFilter(products),
  //     setProducts,
  //     setPageCount,
  //     currentPage
  //   )
  // }, [])

  const filteredTags = (onFilter) => {
    setProducts(filtercartItemsWithTags(products, onFilter))
  }

  const lowToHigh = (productLowToHigh) => {
    const sortedProducts = lowToHighFilter(products)
    // displayProducts(productLowToHigh, setProducts, setPageCount, currentPage)
    // setProducts(lowToHighFilter(products, productLowToHigh))
    // setProducts(lowToHighFilter(products, productLowToHigh))
    setProducts(sortedProducts, productLowToHigh)
  }

  // displayProducts(
  //   lowToHighFilter(products, productLowToHigh),
  //   setProducts,
  //   setPageCount,
  //   currentPage
  // )
  // }

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
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
    setPaginationItems,
    paginationItems,
    products,
    lowToHigh,
    pageCount,
    currentPage,
    setCurrentPage,
    setPageCount,
    displayProducts,
    lowToHighFilter,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
