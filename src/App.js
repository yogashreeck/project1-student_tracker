import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IndexComponent from './components/IndexComponent'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import StudentComponent from './components/StudentComponent';
import CourseComponent from './components/CourseComponent';
import Header from './Header';
import Footer from './Footer';
import Edit from './components/Edit'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <switch>
          <Route exact path='/' component={IndexComponent}></Route>
          <Route exact path='/register' component={RegisterComponent}></Route>
          <Route exact path='/login' component={LoginComponent}></Route>
          <Route exact path='/student' component={StudentComponent}></Route>
          <Route exact path='/student/created' component={StudentComponent}></Route>
          <Route exact path='/student/edit/:id' component={Edit}></Route>
          <Route exact path='/course' component={CourseComponent}></Route>
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
