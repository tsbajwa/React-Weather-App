import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import ForecastContainer from '../containers/ForecastContainer';
import DetailedContainer from '../containers/DetailedContainer';
import Nav from '../components/Nav';

export default function Routes() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/forecast' component={ForecastContainer} />
          <Route path='/detailed' component={DetailedContainer} />
        </Switch>
      </div>
    </Router>
  );
}
