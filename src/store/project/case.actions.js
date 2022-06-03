import { ADD_TO_CART, REMOVE_FROM_CART } from './todos.types'

const addToCart = (text) => {
  return {
    type: ADD_TO_CART,
    payload: text,
  }
}

export const removeToCart = (text) => {
  return {
    type: REMOVE_FROM_CART,
    payload: text,
  }
}
