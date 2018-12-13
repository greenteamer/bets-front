import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Games from './pages/Games';
import Schedule from './pages/Schedule';
import SignIn from './pages/SignIn';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/games' component={Games}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/sign-in' component={SignIn}/>
    </Switch>
  </main>
);

export default Main;
