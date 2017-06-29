import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import Forecast from '../Forecast';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/forecast' component={Forecast} />
    </Switch>
  );
}
