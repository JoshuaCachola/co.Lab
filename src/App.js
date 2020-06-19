import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Homepage from './components/Homepage';
import Room from './components/Room';
import ProtectedRoute from './components/routes/ProtectedRoute';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path='/' exact={true} component={Homepage} />
          <Route path='/signup' exact={true} component={SignUp} />
          <ProtectedRoute path='/:username' exact={true} component={Room} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
