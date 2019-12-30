import {
  CHANGE_CATEGORY,
} from '../actionTypes'

const initState = {
  category: 'frontend'
}

export default function (state = initState, action) {
  if (action.type === CHANGE_CATEGORY) {
    state.category = action.category
  }
  return state
}
