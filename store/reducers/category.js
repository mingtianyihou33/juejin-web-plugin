import {
  CHANGE_CATEGORY,
} from '../actionTypes'

const initState = 'frontend'

export default function (state = initState, action) {
  if (action.type === CHANGE_CATEGORY) {
    return action.category
  }
  return state
}
