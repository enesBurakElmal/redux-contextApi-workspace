import { ADD_TO_CART, REMOVE_FROM_CART } from './todos.types'

const initalState = []

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.text]

    default:
      return state
  }
}

export default cartReducer
