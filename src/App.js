import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import IndexComponent from './components/IndexComponent'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import StudentComponent from './components/StudentComponent';
import CourseComponent from './components/CourseComponent';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/index' component={IndexComponent}></Route>
          <Route exact path='/register' component={RegisterComponent}></Route>
          <Route exact path='/login' component={LoginComponent}></Route>
          <Route exact path='/student' component={StudentComponent}></Route> 
          <Route exact path='/course' component={CourseComponent}></Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
