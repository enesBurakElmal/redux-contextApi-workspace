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
import CartItem from '../card-item/card-item.component'

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
  // const { name, price } = cartItem

  const { cartItems, addItemToCart } = useContext(CartContext)
  const [productsz, setProductsz] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios
      .get('http://localhost:3004/items')
      .then((res) => {
        displayProducts(res.data, setProductsz, setPageCount, currentPage)
      })
      .catch((err) => {
        console.log(err, 'index component')
      })
  }, [currentPage])

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  return (
    <div>
      <div className="display-products">
        {productsz.map((cartItem, index) => {
          const addProductToCart = () => addItemToCart(cartItem)

          return (
            <div className="product-card" key={index}>
              <div className="img-div" />
              <p className="item-price">{cartItem.price}</p>
              <h4>{cartItem.name}</h4>
              <button onClick={addProductToCart}>Add to Cart</button>
            </div>
          )
        })}
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
