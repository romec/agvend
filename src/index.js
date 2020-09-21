import '@babel/polyfill';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {render} from 'react-dom';

import AppContainer from './app/AppContainer';

render(
  <AppContainer/>,
  document.getElementById('root')
);
