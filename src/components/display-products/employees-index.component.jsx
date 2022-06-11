import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from 'react'
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import { CartContext } from '../../contexts/cart-item.context'

import './test-style.css'

export const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  setProducts(products.slice(startIndex, endIndex))
  setPageCount(Math.ceil(products.length / 16))
}

const EmployeesIndex = ({ cartItem }) => {
  // const { name, imageUrl, price, quantity } = cartItem //bunlarin cekilmesi gerek

  const { cartItems, cartTotal, addItemToCart } = useContext(CartContext)
  const [productsz, setProductsz] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const addProductToCart = () => addItemToCart(cartItem)

  console.log(cartItem, 'emp-index')

  // useEffect(() => {
  //   displayProducts(cartItems, setProductsz, setPageCount, currentPage)
  // }, [cartItems, currentPage])

  useEffect(() => {
    axios
      .get('http://localhost:3004/items')
      .then((res) => {
        displayProducts(res.data, setProductsz, setPageCount, currentPage)
        // console.log(displayEmployees)
      })
      .catch((err) => {
        // console.log(err)
      })
  }, [currentPage])

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  return (
    <div>
      <div className="display-products">
        {productsz.map((cartItem, index) => (
          <div className="product-card" key={index}>
            <div className="img-div" />
            <p className="item-price">₺ {cartItem.price}</p>
            <h4>{cartItem.name}</h4>
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
