import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating'
}

const REDUCER = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

export default function useForm ({ initKeyword = '', initRating = 'g' } = {}) {
  const [state, dispatch] = useReducer(REDUCER, {
    keyword: initKeyword,
    rating: initRating
  })

  const { keyword, rating } = state

  return {
    keyword,
    rating,
    updateKeyword: keyword =>
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: rating =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
  }
}
