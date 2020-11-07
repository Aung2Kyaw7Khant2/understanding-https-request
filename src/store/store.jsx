import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './combineReducer';

const middlewares = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
  // eslint-enable //
);

export default store;
