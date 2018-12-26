import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROLES } from './constants';
import Home from './pages/Home';
import Games from './pages/Games';
import Admin from './pages/Admin';
import Agent from './pages/Agent';
import Schedule from './pages/Schedule';
import SignIn from './pages/SignIn';
import { getAccessByRoles } from './utils';


const Routes = ({ me }) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route
          path='/games'
          component={Games}
        />
        <Route
          path='/admin'
          render={(props) => (
            (getAccessByRoles(me, [ROLES.ADMIN]))
              ? <Admin {...props} />
              : <Redirect to="/sign-in" />
          )}
        />
        <Route
          path='/agent'
          render={(props) => (
            (getAccessByRoles(me, [ROLES.AGENT, ROLES.ADMIN]))
              ? <Agent {...props} />
              : <Redirect to="/sign-in" />
          )}
        />
        <Route path='/schedule' component={Schedule}/>
        <Route path='/sign-in' component={SignIn}/>
      </Switch>
    </main>
  );
}

export default Routes;
