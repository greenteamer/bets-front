import React from 'react';

import Header from './components/Header';
import AppProvider from './wrappers/AppStore';
import Routes from './Routes';


const App = () => (
  <AppProvider>
    <Header />
    <Routes />
  </AppProvider>
);

export default App;