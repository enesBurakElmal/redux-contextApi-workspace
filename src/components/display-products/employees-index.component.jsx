import React, { useState, useEffect, createContext, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/project/case.actions'
import axios from 'axios'

// import DisplayProducts from './display-employees'
import './test-style.css'
import CartItem from '../card-item/card-item.component'

const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  setProducts(products.slice(startIndex, endIndex))
  setPageCount(Math.ceil(products.length / 16))
}

const EmployeesIndex = ({ state, setState }) => {
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [cartData, setCartData] = useState([])

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  // const addToBasket = (product) => {
  //   dispatch(addTodo(product))
  // }

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

  const addToCart = () => {
    //action type string olmali sanirim donunce bakilacak
    setCartData(cartData.concat(products))
    dispatch(addTodo(products))
  }

  // const addToCart = (product) => {
  //   console.log('string', cartData)

  //   setCartData([...cartData, product])
  //   localStorage.setItem('cart', JSON.stringify(cartData))
  // }

  // console.log(cartData)

  return (
    <div>
      <div className="display-products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="img-div" />
            <p className="item-price">₺ {product.price}</p>
            <h4>{product.name}</h4>
            <button onClick={() => addToCart(product)}> Add to Cart</button>
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
