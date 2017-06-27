// frontend/components/root.jsx

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, 
         Switch,
         Route } from 'react-router-dom';
import App from './app';

import User from './components/user/user';
import Welcome from './components/welcome/welcome';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Welcome}/>
          <Route path='/user' component={User}/>
        </Switch>
      </BrowserRouter>
    </App>
  </Provider>
);

export default Root;