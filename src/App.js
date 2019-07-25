import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IndexComponent from './components/IndexComponent'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import StudentComponent from './components/StudentComponent';
import CourseComponent from './components/CourseComponent';
import Header from './Header';
import Footer from './Footer';

// import  StudentList  from './components/students/StudentList'
// import  StudentInsert  from './components/students/StudentInsert'
// import StudentUpdate from './components/students/StudentUpdate'

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
          <Route exact path='/course' component={CourseComponent}></Route>

          {/* <Route path="/student/list" exact component={StudentList} />
                <Route path="/student" exact component={StudentInsert} />
                <Route
                    path="/student/:id"
                    exact
                    component={StudentUpdate} /> */}
        </switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
