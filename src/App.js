import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Homepage from './components/Homepage';
import Room from './components/Room';
import ProtectedRoute from './components/routes/ProtectedRoute';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path='/' exact={true} component={Homepage} />
          <Route path='/signup' exact={true} component={SignUp} />
          <Route path='/login' exact={true} component={LogIn} />
          <Route path='/room' component={Room} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
