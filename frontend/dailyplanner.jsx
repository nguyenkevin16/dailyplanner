// frontend/dailyplanner.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './root';

import { receiveCurrentUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  const store = configureStore();

  // Add user info to window
  firebase.auth().onAuthStateChanged(function(user) {
    window.user = user;
  });

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
