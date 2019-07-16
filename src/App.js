import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import IndexComponent from './components/IndexComponent'
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/index' component={IndexComponent}></Route>
          <Route exact path='/register' component={RegisterComponent}></Route>
          <Route exact path='/login' component={LoginComponent}></Route>
          <Route exact path='/home' component={HomeComponent}></Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
