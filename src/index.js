import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import Header from './Header'




ReactDOM.render(<Header />, document.getElementById('root1'));
ReactDOM.render( <App />,  document.getElementById('root'));
ReactDOM.render( <Footer />, document.getElementById('root2'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
