import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import Homepage from '/components/Homepage';
import Room from '/components/Room';
import ProtectedRoute from '/components/routes/ProtectedRoute';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path='/' exact={true} component={Homepage} />
          <ProtectedRoute path='/:username' exact={true} component={Room} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
