import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import Forecast from '../components/Forecast';
import Detailed from '../components/Detailed';
import Nav from '../components/Nav';

export default function Routes() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/forecast' component={Forecast} />
          <Route path='/detailed' component={Detailed} />
        </Switch>
      </div>
    </Router>
  );
}
