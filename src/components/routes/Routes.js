import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import Forecast from '../Forecast';
import Detailed from '../Detailed';
import Nav from '../Nav';

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
