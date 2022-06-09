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

import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import { selectCategoriesMap } from '../../store/categories/category.selector'

import { useAPI } from '../../contexts/cart-item/cart-item.context'

import './test-style.css'

export const displayProducts = (products, setProducts, setPageCount, page) => {
  const startIndex = (page - 1) * 16
  const endIndex = page * 16
  setProducts(products.slice(startIndex, endIndex))
  setPageCount(Math.ceil(products.length / 16))
}

// export const fetchData = async () => {
//   return (dispatch) => {
//     return axios
//       .get('http://localhost:3004/items')
//       .then((response) => {
//         dispatch({ type: 'SET_PRODUCTS', payload: response.data })
//       })

//       .catch((error) => {
//         console.log(error)
//       })
//   }
// }

const mapStateToProps = (state) => {
  return {
    terms: state.terms,
  }
}

const EmployeesIndex = ({ cartItem }) => {
  const [products1, setProducts1] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category])

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const res = await axios.get('/api/categories')
  //     dispatch(setCategories(res.data))
  //   }
  //   getCategoriesMap()
  // }, [])

  // useEffect(() => {
  //   setProducts(categoriesMap[category])
  // }, [category, categoriesMap])

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, setProducts))
  }
  useEffect(() => {
    axios
      .get('http://localhost:3004/items')
      .then((res) => {
        setProducts1(res.data)
        displayProducts(res.data, setProducts1, setPageCount, currentPage)
        setProducts(res.data)
      })

      .catch((err) => {
        console.log(err)
      })
  }, [currentPage])

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  const { users } = useAPI()
  console.log(users)

  return (
    <div>
      <div className="display-products">
        {products1.map((cartItems, index) => (
          <div className="product-card" key={index}>
            <div className="img-div" />
            <p className="item-price">₺ {cartItems.price}</p>
            <h4>{cartItems.name}</h4>
            <button onClick={addProductToCart}> Add to Cart</button>
          </div>
        ))}
      </div>
      {/* <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div> */}

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
