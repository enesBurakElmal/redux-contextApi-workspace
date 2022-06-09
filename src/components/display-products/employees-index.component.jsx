import React, { useState, useEffect, useContext } from 'react'
import ReactPaginate from 'react-paginate'

import { CartContext } from '../../contexts/cart-item/cart-item.context'

import './test-style.css'

export const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  setProducts(products.slice(startIndex, endIndex))
  setPageCount(Math.ceil(products.length / 16))
}

const EmployeesIndex = ({ cartItem }) => {
  const { cartItems, cartTotal } = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    displayProducts(cartItems, setProducts, setPageCount, currentPage)
  }, [cartItems, currentPage])

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext)

  const addProductToCart = () => addItemToCart(cartItem)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemToCart(cartItem)

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  return (
    <div>
      <div className="display-products">
        {products.map((cartItems, index) => (
          <div className="product-card" key={index}>
            <div className="img-div" />
            <p className="item-price">₺ {cartItems.price}</p>
            <h4>{cartItems.name}</h4>
            <button onClick={addProductToCart}> Add to Cart</button>
          </div>
        ))}
      </div>

      <ReactPaginate
        pageCount={pageCount}
        marginPagesDisplayed={4}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        subContainerClassName={'pages pagination'}
        activeClassName={'navigationActive'}
        containerClassName={'navigationButtons'}
        previousLinkClassName={'previousButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'navigationDisabled'}
        activeLinkClassName={'navigationActive'}
      />
    </div>
  )
}

export default EmployeesIndex
