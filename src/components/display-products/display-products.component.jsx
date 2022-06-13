import React, { useState, useEffect, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import { CartContext } from '../../contexts/cart-item.context'

import './test-style.css'

export const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  const productsToDisplay = products.slice(startIndex, endIndex)
  setProducts(productsToDisplay)
  setPageCount(Math.ceil(products.length / 16))
}

const EmployeesIndex = ({ cartItem }) => {
  // const { name, imageUrl, price, quantity } = cartItem //bunlarin cekilmesi gerek
  // const { name, price } = cartItem

  const { products, setProducts, addItemToCart, filteredTags } =
    useContext(CartContext)
  const [paginationItems, setPaginationItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios
      .get('http://localhost:3004/items')
      .then((res) => {
        displayProducts(res.data, setPaginationItems, setPageCount, currentPage)
      })
      .catch((err) => {
        console.log(err, 'err with index component')
      })
  }, [currentPage])

  // useEffect(() => {
  //   displayProducts(products, setPaginationItems, setPageCount, currentPage)
  // }, [currentPage])

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  return (
    <div>
      <div className="display-products">
        {paginationItems.map((cartItem, index) => {
          const addProductToCart = () => addItemToCart(cartItem)

          return (
            <div className="product-card" key={index}>
              <div className="img-div" />
              <div>
                <p className="item-price">{cartItem.price}</p>
                <h4>{cartItem.name}</h4>
              </div>
              <button className="buy-button" onClick={addProductToCart}>
                Add to Cart
              </button>
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
