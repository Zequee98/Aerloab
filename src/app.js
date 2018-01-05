import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import store from './store';
import Main from './components/Main.jsx';
import ProductosContainer from './containers/ProductosContainer.jsx'

const router = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
      
        <IndexRoute component={ProductosContainer}/>

      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
