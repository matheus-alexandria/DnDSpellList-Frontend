import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SpellsDashboard from '../pages/SpellsDashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SpellsDashboard} />
  </Switch>
);

export default Routes;
