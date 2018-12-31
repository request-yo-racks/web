import { all, call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, fetchPlaces, selectPlace } from './store'


function* watchFetchPlacesAsync() {
  yield takeLatest(actionTypes.FETCH_PLACES_ASYNC, workerFetchPlaces);
}

function* workerFetchPlaces(action) {
  const { lat, lng } = action.payload.location;
  const apiRootUrl = 'http://api.192.168.99.100.nip.io';
  // const apiRootUrl = 'http://127.0.0.1:8000';
  const endpoint = apiRootUrl + '/1.0/places?location=' + lat + ',' + lng;
  const response = yield call(fetch, endpoint);
  const json = yield call([response, "json"]);
  const data = json.results.slice(1, 11);
  yield put(fetchPlaces(data));
}

function* watchSelectPlaceAsync() {
  yield takeLatest(actionTypes.SELECT_PLACE_ASYNC, workerSelectPlace);
}

function* workerSelectPlace(action) {
  const { vicinity, name, place_id } = action.payload.place;
  const apiRootUrl = 'http://api.192.168.99.100.nip.io';
  // const apiRootUrl = 'http://127.0.0.1:8000';
  const endpoint = apiRootUrl + '/1.0/place';
  const response = yield call(fetch, endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address: vicinity, name, place_id })
  });
  const json = yield call([response, "json"]);
  yield put(selectPlace(json));
}


// Single entry point to start all Sagas at once.
export default function* rootSaga() {
  yield all([
    watchFetchPlacesAsync(),
    watchSelectPlaceAsync()
  ])
}
