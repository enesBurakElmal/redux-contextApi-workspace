import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
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

const EmployeesIndex = () => {
  const [products, setProducts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [price, setPrice] = useState(0)
  const [cartData, setCartData] = useState([])

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

  //   componentDidMount() {
  //     axios
  //         .get('http://localhost:3004/items')
  //         .then((res) => {
  //             displayEmployees(res.data, setEmployees, setPageCount, currentPage)
  //             // console.log(displayEmployees)
  //         })
  //         .catch((err) => {
  //             // console.log(err)
  //         })}

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1
    setCurrentPage(selectedPage)
  }

  const productsPrice = products.map((product) => {
    return product.price
  })

  const addToCart = (product) => {
    // console.log(employee)
    // console.log(employees)
    // const newCards = [...products]
    // const newCard = newCards.find((card) => card.id === product.id)
    // newCard.inCart = true
    // newCard.count = 1
    // newCard.total = newCard.price
    // setProducts(newCards)
    // setInCart([...inCart, newCard])
    // console.log(product)
    // const parsedData = JSON.stringify(product)

    console.log('string', cartData)

    setCartData([...cartData, product])
    localStorage.setItem('cart', JSON.stringify(cartData))
  }

  return (
    <div>
      <div className="display-products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="img-div" />
            <p className="item-price">₺ {product.price}</p>
            <h4>{product.name}</h4>
            <button onClick={() => addToCart(product)}>Add to cart</button>
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

//   render() {
//     const {
//       employees,
//       pageCount,
//       handlePageClick,
//       currentPage,
//       pageSize,
//       search,
//       sort,
//       sortOrder,
//     } = this.state

//     return (
//       <div>
//         <div className="display-products">
//           {employees.map((items, index) => (
//             <div className="product-card" key={index}>
//               <div className="img-div" />
//               <p className="item-price">₺ {items.price}</p>
//               <h4>{items.name}</h4>
//               <button>Add to Cart</button>
//             </div>
//           ))}
//         </div>

//         <ReactPaginate
//           pageCount={pageCount}
//           marginPagesDisplayed={4}
//           pageRangeDisplayed={4}
//           onPageChange={handlePageClick}
//           previousLabel={'Previous'}
//           nextLabel={'Next'}
//           breakLabel={'...'}
//           subContainerClassName={'pages pagination'}
//           activeClassName={'navigationActive'}
//           containerClassName={'navigationButtons'}
//           previousLinkClassName={'previousButton'}
//           nextLinkClassName={'nextButton'}
//           disabledClassName={'navigationDisabled'}
//           activeLinkClassName={'navigationActive'}
//         />
//       </div>
//     )
//   }
// }

// const displayEmployees = (employees, setEmployees, setPageCount, page) => {
//   const startIndex = (page - 1) * 16
//   const endIndex = page * 16
//   setEmployees(employees.slice(startIndex, endIndex))
//   setPageCount(Math.ceil(employees.length / 16))
// }

// const EmployeesIndex = () => {
//   const [employees, setEmployees] = useState([])
//   const [pageCount, setPageCount] = useState(0)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [price, setPrice] = useState(0)

//   useEffect(() => {
//     axios
//       .get('http://localhost:3004/items')
//       .then((res) => {
//         displayEmployees(res.data, setEmployees, setPageCount, currentPage)
//         // console.log(displayEmployees)
//       })
//       .catch((err) => {
//         // console.log(err)
//       })
//   }, [currentPage])

//   componentDidMount() {
//     axios
//         .get('http://localhost:3004/items')
//         .then((res) => {
//             displayEmployees(res.data, setEmployees, setPageCount, currentPage)
//             // console.log(displayEmployees)
//         })
//         .catch((err) => {
//             // console.log(err)
//         })}

//   const handlePageClick = (data) => {
//     const selectedPage = data.selected + 1
//     setCurrentPage(selectedPage)
//   }

//   const employeesPrice = employees.map((employee) => {
//     return employee.price
//   })

//   //   console.log(setPrice)

//   return (
//     <div>
//       <div className="display-products">
//         {employees.map((items, index) => (
//           <div className="product-card" key={index}>
//             <div className="img-div" />
//             <p className="item-price">₺ {items.price}</p>
//             <h4>{items.name}</h4>
//             <button price={price} onClick={() => setPrice(items.price)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <ReactPaginate
//         pageCount={pageCount}
//         marginPagesDisplayed={4}
//         pageRangeDisplayed={4}
//         onPageChange={handlePageClick}
//         previousLabel={'Previous'}
//         nextLabel={'Next'}
//         breakLabel={'...'}
//         subContainerClassName={'pages pagination'}
//         activeClassName={'navigationActive'}
//         containerClassName={'navigationButtons'}
//         previousLinkClassName={'previousButton'}
//         nextLinkClassName={'nextButton'}
//         disabledClassName={'navigationDisabled'}
//         activeLinkClassName={'navigationActive'}
//       />
//     </div>
//   )
// }

export default EmployeesIndex
