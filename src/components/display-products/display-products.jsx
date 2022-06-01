import React from 'react'

import axios from 'axios'

const DisplayProducts = (props) => {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    axios
      .get('http://localhost:3003/companies')
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="display-products">
      {products.map((product) => (
        <div className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default DisplayProducts
