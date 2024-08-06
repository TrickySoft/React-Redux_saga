import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchDataSuccess,
  fetchDataFailure,
  FETCH_DATA_REQUEST,
} from './Actions';

const fetchDataApi = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Oops something went wrong!');
  }
  const result = await response.json();
  return result;
};
function* fetchData() {
  try {
    const data = yield call(fetchDataApi);
    yield put(fetchDataSuccess(data));
  } catch (err) {
    yield put(fetchDataFailure(err));
  }
}

function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchData);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
