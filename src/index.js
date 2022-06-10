import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { CartProvider } from './contexts/cart-item.context'
import { CategoriesProvider } from './contexts/products.context'

import App from './App'

// import { store } from '../src/store/store'

// console.log(store)

// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
