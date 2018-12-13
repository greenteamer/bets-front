import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'

import Header from './components/Header';
import logo from './logo.svg';
// import './App.css';
import Main from './Main';


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
