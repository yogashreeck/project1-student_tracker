// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const inititalState = {};

// const store = createStore(
//         rootReducer, 
//         inititalState, 
//         compose(applyMiddleware(thunk), 
//                 window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

// export default store;

import Reducer from './reducers';
import ReduxThunk from 'redux-thunk'
import {  applyMiddleware, compose } from 'redux';	


	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = (Reducer, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;