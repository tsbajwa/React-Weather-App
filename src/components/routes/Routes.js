import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import Forecast from '../Forecast';
import Detailed from '../Detailed';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/forecast' component={Forecast} />
      <Route path='/detailed' component={Detailed} />
    </Switch>
  );
}
