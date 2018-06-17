//import { VisibilityFilters } from '../actions'
const defaultState = { status: 'default' }

const rootReducer = (state = defaultState, action) => {
  console.log('reducer received action : ' + action.type);

  switch (action.type) {
    case 'UPDATE_STATUS':
      return {
        ...state,
        status: 'api was fetched!'
      }
    default:
      return defaultState
  }
}

export default rootReducer
