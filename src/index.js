import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes/Routes';

require('./style/main.scss');

ReactDOM.render(
  <Routes />, document.getElementById('app'),
);
