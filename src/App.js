import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './ store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import IndexComponent from './components/IndexComponent'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import StudentComponent from './components/StudentComponent';
import CourseComponent from './components/CourseComponent';
import Header from './Header';
import Footer from './Footer';


if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
function App() {
  return (
    <div>
    
      <Router>
      <Header/>
       
        <Route exact path='/index' component={IndexComponent}></Route>
          <Route exact path='/register' component={RegisterComponent}></Route>
          <Route exact path='/login' component={LoginComponent}></Route>
          <Route exact path='/student' component={StudentComponent}></Route> 
          <Route exact path='/course' component={CourseComponent}></Route>  
       
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
