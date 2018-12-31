import { all, call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes, fetchPlaces, } from './store'


function* watchFetchPlacesAsync() {
  yield takeLatest(actionTypes.FETCH_PLACES_ASYNC, workerFetchPlaces)
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

// Single entry point to start all Sagas at once.
export default function* rootSaga() {
  yield all([
    watchFetchPlacesAsync()
  ])
}
