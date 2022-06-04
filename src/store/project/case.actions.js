import { ADD_TO_CART, REMOVE_FROM_CART } from './todos.types'

export const addTodo = (text) => ({
  type: ADD_TO_CART,
  text,
})
