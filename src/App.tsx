import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Globalstyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Routes />

    <Globalstyle />
  </Router>
);

export default App;
