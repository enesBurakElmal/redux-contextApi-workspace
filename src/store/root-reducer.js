import { combineReducers } from 'redux'

import { categoriesReducer } from './categories/category.reducer'
import { cartReducer } from './cart/cart.reducer'

const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
})

export default rootReducer
