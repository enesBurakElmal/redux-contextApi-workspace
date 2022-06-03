import { ADD_TO_CART, REMOVE_FROM_CART } from './todos.types'

const cartData = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.text]
    case REMOVE_FROM_CART:
      const newState = [...state]
      const indexOf = newState.indexOf(action.text)
      newState.splice(indexOf, 1)
      return
    default:
      return state
  }
}

export default cartData
