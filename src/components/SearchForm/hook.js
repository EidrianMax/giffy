import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_QUERY: 'update_query',
  UPDATE_RATING: 'update_rating',
  UPDATE_LANG: 'update_lang'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      }
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    case ACTIONS.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
}

export default function useSearchForm ({ initRating, initLang } = {}) {
  const [state, dispatch] = useReducer(reducer, {
    query: '',
    rating: initRating,
    lang: initLang
  })
  const { query, rating, lang } = state

  return {
    query,
    rating,
    lang,
    updateQuery: query =>
      dispatch({ type: ACTIONS.UPDATE_QUERY, payload: query }),
    updateRating: rating =>
      dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
    updateLang: lang => dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang })
  }
}
