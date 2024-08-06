import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
  reducer: RootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
