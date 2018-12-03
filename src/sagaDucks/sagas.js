import { all } from 'redux-saga/effects';

import commonSagas from './common/commonSagas';

export default function* mySaga() {
  yield all([
    ...commonSagas,
  ]);
}
