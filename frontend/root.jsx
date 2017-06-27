// frontend/components/root.jsx

import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import App from './app';

import User from './components/user/user';
import Welcome from './components/welcome/welcome';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/user' component={User}/>
        </Switch>
      </HashRouter>
    </App>
  </Provider>
);

export default Root;