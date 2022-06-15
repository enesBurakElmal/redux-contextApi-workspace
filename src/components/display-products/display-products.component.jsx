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
  const { addItemToCart, products, setProducts } = useContext(CartContext)
  const [paginationItems, setPaginationItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    displayProducts(products, setPaginationItems, setPageCount, currentPage)
  }, [products, currentPage])

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3004/items')
  //     .then((res) => {
  //       displayProducts(res.data, setPaginationItems, setPageCount, currentPage)
  //     })
  //     .catch((err) => {
  //       console.log(err, 'err with index component')
  //     })
  // }, [currentPage])

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  return (
    <>
      <div className={styles.displayProducts}>
        {paginationItems.map((cartItem, index) => {
          const addProductToCart = () => addItemToCart(cartItem)

          return (
            <div className={styles.productCard} key={index}>
              <div className={styles.imgDiv} />
              <div>
                <p className={styles.itemPrice}>{cartItem.price}</p>
                <h4>{cartItem.name}</h4>
              </div>
              <button className={styles.buyButton} onClick={addProductToCart}>
                Add to Cart
              </button>
            </div>
          )
        })}

        <ReactPaginate
          pageCount={pageCount}
          marginPagesDisplayed={4}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          subContainerClassName={styles.pagesPagination}
          activeClassName={styles.navigationActive}
          containerClassName={styles.navigationButtons}
          previousLinkClassName={styles.previousButton}
          nextLinkClassName={styles.nextButton}
          disabledClassName={styles.navigationDisabled}
          activeLinkClassName={styles.navigationActive}
        />
      </div>
    </>
  )
}

export default EmployeesIndex
