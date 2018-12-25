import { createStore, applyMiddleware } from 'redux';

// Apply the middlewares and enable the Redux DevTools if necessary.
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// Define the initial state of the store .
const initialState = {
  location: {
    lng: -97.740313,
    lat: 30.274687
  },
  placeDetails: null,
  placeSummaries: [{ name: 'Loading...' }],
}

// Define the redux action types.
export const actionTypes = {
  FETCH_PLACES: 'FETCH_PLACES',
  FETCH_PLACES_ASYNC: 'FETCH_PLACES_ASYNC',
  SELECT_LOCATION: 'SELECT_LOCATION',
  SELECT_PLACE: 'SELECT_PLACE',
  SELECT_PLACE_ASYNC: 'SELECT_PLACE_ASYNC'
}

// Define reducers.
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLACES:
      return {
        ...state, ...action.payload
      }
    case actionTypes.SELECT_LOCATION:
      return {
        ...state, ...action.payload
      }
    case actionTypes.SELECT_PLACE:
      return {
        ...state, ...action.payload
      }

    default:
      return state
  }
}

// Define actions.
export const selectLocation = location => ({
  type: actionTypes.SELECT_LOCATION,
  payload: { location }
});

export const fetchPlaces = (placeSummaries) => ({
  type: actionTypes.SELECT_LOCATION,
  payload: { placeSummaries }
});

export const selectPlace = placeDetails => ({
  type: actionTypes.SELECT_PLACE,
  payload: { placeDetails }
});

// Initialize store.
export function initializeStore(initialState = initialState) {
  return createStore(reducer, initialState, bindMiddleware([]))
}
