// frontend/dailyplanner.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './root';

import * as SessionAPI from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
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
