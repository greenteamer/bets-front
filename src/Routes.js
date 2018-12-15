import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Games from './pages/Games';
import Agent from './pages/Agent';
import Schedule from './pages/Schedule';
import SignIn from './pages/SignIn';


const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/games' component={Games}/>
      <Route path='/agent' component={Agent}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/sign-in' component={SignIn}/>
    </Switch>
  </main>
);

export default Routes;
