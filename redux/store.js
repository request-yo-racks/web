import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'

const initialState = {
  text: 'nobody'
}

export const actionTypes = {
  SELECT_LOCATION: 'SELECT_LOCATION'
}

// Define reducers.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_LOCATION:
      return {
        ...state, ...action.payload
      }

    default:
      return state
  }
}

// Define actions.
export const selectLocation = text => ({
  type: actionTypes.SELECT_LOCATION,
  payload: { text }
});

// Initialize store.
export function initializeStore(initialState = initialState) {
  // return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  return createStore(reducer, initialState)
}
