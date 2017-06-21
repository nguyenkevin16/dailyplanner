// frontend/dailyplanner.jsx

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './root';

import * as SessionAPI from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  
  // TESTING START
  window.signup = SessionAPI.signup;
  window.login = SessionAPI.login;
  window.logout = SessionAPI.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
