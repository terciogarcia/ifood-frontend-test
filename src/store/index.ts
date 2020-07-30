import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './ducks';

const middlewares = [];

middlewares.push(thunk);

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

export default store;
