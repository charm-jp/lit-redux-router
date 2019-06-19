import {
  createStore,
  compose as origCompose,
  combineReducers,
} from 'https://unpkg.com/redux/es/redux.js?module';
import { lazyReducerEnhancer } from 'https://unpkg.com/pwa-helpers/lazy-reducer-enhancer.js?module';

// eslint-disable-next-line no-underscore-dangle
const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

const store = createStore(
  state => state,
  compose(lazyReducerEnhancer(combineReducers)),
);

export default store;
