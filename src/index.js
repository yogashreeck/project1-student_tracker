import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import Header from './Header';
// import Footer from './Footer';


// import Reducer from './reducers';
// import ReduxThunk from 'redux-thunk'
// import { Provider } from 'react-redux';	
// // import { createStore, combineReducers } from 'redux';
// // import AgeupdownReducer from './AgeupdownReducer';	
// // import {combineReducer} from 'reducer';
// // export default AgeupdownReducer({AgeupdownReducer});
// import { createStore, applyMiddleware, compose } from 'redux';	


// 	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(Reducer, {}, composeEnhancers(applyMiddleware(ReduxThunk)));
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



// ReactDOM.render(<Header />, document.getElementById('root1'));
ReactDOM.render( <App />,  document.getElementById('root'));
// ReactDOM.render( <Footer />, document.getElementById('root2'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
