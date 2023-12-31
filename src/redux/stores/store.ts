import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware} from 'redux';
import type {SagaMiddlewareOptions} from '@redux-saga/core';
import {SagaManager} from '../sagas';
import Reactotron from 'reactotron-react-native';
import reactotronConfig from '../../helpers/reactotronConfig';

import {IS_TESTS} from '@constants/platforms';
import {newTextSlice} from '@screens/HomeScreen/redux/reducer';

const sagaMiddlewares: SagaMiddlewareOptions = {};

if (__DEV__ && !IS_TESTS) {
  sagaMiddlewares.sagaMonitor = Reactotron.createSagaMonitor?.();
}

const sagaMiddleware = createSagaMiddleware(sagaMiddlewares);
const composeParams = [applyMiddleware(sagaMiddleware)];

if (__DEV__ && !IS_TESTS) {
  composeParams.push(reactotronConfig?.createEnhancer?.());
}

const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: newTextSlice.reducer,
  middleware,
});

sagaMiddleware.run(SagaManager);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};
