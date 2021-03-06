import {
  ADD_FETCHED_DATA,
  ADD_FAVORITE_TERM,
  REMOVE_FAVORITE_TERM,
} from './types.js'
import axios from 'axios'
const apiUrl = 'http://localhost:3004/items'

export const addFavoriteTerm = (data) => {
  return {
    type: ADD_FAVORITE_TERM,
    payload: {
      name: data.name,
      description: data.description,
      price: data.price,
    },
  }
}

export const removeFavoriteTerm = (name) => {
  return {
    type: REMOVE_FAVORITE_TERM,
    payload: {
      name,
    },
  }
}

export const fetchData = () => {
  return (dispatch) => {
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: data,
        })
      })
      .catch((error) => {
        throw error
      })
  }
}
