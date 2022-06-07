import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store/root-reducer'
import './index.css'
import App from './App'

// import { store } from '../src/store/store'

const store = configureStore({
  reducer: rootReducer,
})

// console.log(store)

// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
