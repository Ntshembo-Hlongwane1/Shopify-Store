import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { FetchHoodiesReducer } from './Reducers/FetchHoodies/FetchHoodies';
import { FetchJeansReducer } from './Reducers/FetchJeans/FetchJeans';
import { FetchProducByIDReducer } from './Reducers/FetchProductByID/FetchProductByID';
import { FetchSneakersReducer } from './Reducers/FetchSneakers/FetchSneakers';
const initialState = {};

const reducers = combineReducers({
  hoodies: FetchHoodiesReducer,
  jeans: FetchJeansReducer,
  sneakers: FetchSneakersReducer,
  singleProductDetails: FetchProducByIDReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
