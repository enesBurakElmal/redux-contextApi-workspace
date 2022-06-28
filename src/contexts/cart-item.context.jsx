import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = 'http://localhost:3004/items'

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

const highToLowFilter = (products) => {
  const sortedProducts = products.sort((a, b) => b.price - a.price)
  return sortedProducts
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.added !== cartItemToClear.added)

const filterScript = (products, searchfield) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchfield.toLowerCase())
  )
  return filteredProducts
}

// const filterOnTags = (products, tags) => {
//   const filteredProductTags = products.filter((item) => {
//     return [item.tags.includes(tags)]
//   })
//   console.log(filteredProductTags, 'current products after search')
//   return filteredProductTags
// }

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
  setSearchfield: () => {},
  highToLow: () => {},
  tagFilter: () => {},
  setTagField: () => {},
  productsTags: [],
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [paginationItems, setPaginationItems] = useState([])
  const [productsTags, setProductsTags] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [searchfield, setSearchfield] = useState('')
  const [tagField, setTagField] = useState('') //buradan devam edilecek, fonksiyonlardaki searchfieldler duzeltilecek,  tags componenti de ayni sekilde
  const [cartTotal, setCartTotal] = useState(0)
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
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setProducts(products)
    setPaginationItems(products)
    setPageCount(Math.ceil(products.length / 16))
  }, [])

  useEffect(() => {
    const productTags = products.map((product) => product.tags)
    const tags = productTags.flat()
    const uniqueTags = [...new Set(tags)]
    setProductsTags(uniqueTags)
  }, [products])

  // const fetchTags = () => {
  //   const productTags = products.map((product) => product.tags)
  //   const tags = productTags.flat()
  //   const uniqueTags = [...new Set(tags)]
  //   setProductsTags(uniqueTags)
  //   console.log(uniqueTags, 'unique tags')
  // }

  const productTags = products.map((product) => product.tags)
  const tags = productTags.flat()
  const uniqueTags = [...new Set(tags)]
  // console.log(uniqueTags)

  // setProductsTags(uniqueTags)

  const filterOnTags = (products, tag) => {
    const filteredProducts = products.filter((product) =>
      product.tags.includes(tag)
    )
    return filteredProducts
  }

  useEffect(() => {
    displayProducts(products, setPaginationItems, setPageCount, currentPage)
  }, [products, setPaginationItems, setPageCount, currentPage])

  useEffect(() => {
    if (searchfield === '') {
      setProducts(products)
      setPageCount(Math.ceil(products / 16))
    }
    if (searchfield !== '') {
      setProducts(filterScript(products, searchfield))
      setPageCount(Math.ceil(filterScript(products, searchfield).length / 16))
    }
  }, [searchfield])

  useEffect(() => {
    if (tagField === '') {
      setProducts(products)
      setPageCount(Math.ceil(products / 16))
    }
    if (tagField !== '') {
      setProducts(filterOnTags(products, tagField))
      setPageCount(Math.ceil(filterOnTags(products, tagField).length / 16))
    }
  }, [])

  const tagFilter = (tag) => {
    setTagField(filterOnTags(products, tag))
    setProducts(filterOnTags(products, tag))
  }

  const filteredTags = (onFilter) => {
    setSearchfield(filterScript(products, onFilter))
    setProducts(filterScript(products, onFilter))
  }

  const lowToHigh = (productLowToHigh) => {
    const sortedProducts = lowToHighFilter(products)
    setProducts(sortedProducts, productLowToHigh)
  }

  const highToLow = (productHighToLow) => {
    const sortedProducts = highToLowFilter(products)
    setProducts(sortedProducts, productHighToLow)
  }

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
    setSearchfield,
    highToLow,
    tagFilter,
    setTagField,
    productsTags,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
