import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { CartProvider } from './contexts/cart-item.context'

import rootReducer from './reducers'
import { fetchData } from './actions'

import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch(fetchData())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CartProvider>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </CartProvider>
  </React.StrictMode>
)
