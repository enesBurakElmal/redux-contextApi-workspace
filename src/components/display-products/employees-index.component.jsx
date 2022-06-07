import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
} from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import './test-style.css'

const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  setProducts(products.slice(startIndex, endIndex))
  setPageCount(Math.ceil(products.length / 16))
}

const EmployeesIndex = ({ cartItem }) => {
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [cartData, setCartData] = useState([])

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = (product) => {
    dispatch(addItemToCart(cartItems, product))
  }

  useEffect(() => {
    axios
      .get('http://localhost:3004/items')
      .then((res) => {
        displayProducts(res.data, setProducts, setPageCount, currentPage)
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
        {products.map((cartItem, index) => (
          <div className="product-card" key={index}>
            <div className="img-div" />
            <p className="item-price">₺ {cartItem.price}</p>
            <h4>{cartItem.name}</h4>
            <button onClick={addProductToCart}>Add to Basket</button>
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
