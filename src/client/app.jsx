import React from 'react';
import Helmet from 'react-helmet-async';
import { Route } from 'react-router-dom';
import Home from './pages/home';

const App = () => (
  <div>
    <Helmet>
      <title>Boilerplate SPA Frontend</title>
    </Helmet>
    <Route exact path="/" component={Home} />
  </div>
);

export default App;
