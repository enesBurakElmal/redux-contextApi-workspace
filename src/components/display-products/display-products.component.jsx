import React, { useState, useEffect, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

import { CartContext } from '../../contexts/cart-item.context'

import styles from './display-products.module.scss'

export const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  const productsToDisplay = products.slice(startIndex, endIndex)
  setProducts(productsToDisplay)
  setPageCount(Math.ceil(products.length / 16))
}

const EmployeesIndex = () => {
  const { addItemToCart, products } = useContext(CartContext)
  const [paginationItems, setPaginationItems] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    displayProducts(products, setPaginationItems, setPageCount, currentPage)
  }, [products, currentPage])

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  const onSearchChange = (e) => {
    setSearchfield(e.target.value)
  }

  const filteredPaginationItems = paginationItems.filter((item) => {
    return item.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return (
    <>
      <div className={styles.displayProducts}>
        {paginationItems.map((cartItem, index) => {
          const addProductToCart = () => addItemToCart(cartItem)

          return (
            <div className={styles.productCard} key={index}>
              <div className={styles.imgDiv} />
              <p className={styles.itemPrice}>{cartItem.price}</p>
              <div className={styles.textStar}>
                <h4>{cartItem.name}</h4>
              </div>
              <button className={styles.buyButton} onClick={addProductToCart}>
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
        containerClassName={styles.navigationButtons}
        subContainerClassName={styles.pagesPagination}
        activeClassName={styles.navigationActive}
        previousLinkClassName={styles.previousButton}
        nextLinkClassName={styles.nextButton}
        disabledClassName={styles.navigationDisabled}
        activeLinkClassName={styles.navigationActive}
      />
    </>
  )
}

export default EmployeesIndex
