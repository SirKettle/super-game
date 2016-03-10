
'use strict';

console.log('hello super app');

import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router';

import routes from './routes';

console.log(routes);

ReactDom.render( <Router routes={ routes } history={ hashHistory } />, document.getElementById( 'SuperGame' ) );