import { createStore, applyMiddleware } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';

const logger = createLogger();
const pm = createPromise({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
});

const store = createStore(modules, applyMiddleware(logger, pm));

export default store;
