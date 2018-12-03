import { put, takeLatest } from 'redux-saga/effects';
import { types as commonTypes } from './common';

function* init() {
  try {
    yield put({ type: commonTypes.INIT_SUCCESS });
  } catch (e) {
    console.log(`${commonTypes.INIT_FAILED} ${e}`);
  }
}

const commonSagas = [
  takeLatest(commonTypes.INIT, init),
];

export default commonSagas;
