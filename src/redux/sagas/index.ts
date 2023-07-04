import {AllEffect, all} from 'redux-saga/effects';
import homeSagas from '@screens/HomeScreen/redux/sagas';

export function* SagaManager(): Generator<AllEffect<any>> {
  yield all([...homeSagas]);
}
