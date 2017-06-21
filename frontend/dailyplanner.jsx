// frontend/dailyplanner.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import * as SessionAPI from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  // for testing
  const store = configureStore();
  window.signup = SessionAPI.signup;
  window.login = SessionAPI.login;
  window.logout = SessionAPI.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // 

  const root = document.getElementById('root');
  ReactDOM.render(<h1>From React</h1>, root);
});
