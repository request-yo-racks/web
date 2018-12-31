import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

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
  type: actionTypes.FETCH_PLACES,
  payload: { placeSummaries }
});

export const fetchPlacesAsync = (location) => ({
  type: actionTypes.FETCH_PLACES_ASYNC,
  payload: { location }
});

export const selectPlace = (placeDetails) => ({
  type: actionTypes.SELECT_PLACE,
  payload: { placeDetails }
});

export const selectPlaceAsync = (place) => ({
  type: actionTypes.SELECT_PLACE_ASYNC,
  payload: { place }
});

// Initialize store.
export function initializeStore(initialState = initialState) {
  const store = createStore(reducer, initialState, bindMiddleware([sagaMiddleware]))
  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }
  store.runSagaTask()
  return store
}
