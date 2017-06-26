import * as FirebaseAPI from '../util/firebase_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

// Sync
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

// Async
export const signup = user => dispatch => (
  FirebaseAPI.signup(user).then(
    currentUser => { dispatch(receiveCurrentUser(currentUser)); }
  ).catch(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  FirebaseAPI.login(user).then( currentUser => {
    dispatch(receiveCurrentUser(currentUser)); }
  ).catch(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  FirebaseAPI.logout().then(
    () => { dispatch(receiveCurrentUser(null)); }
  ).catch(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const googlelogin = () => dispatch => (
  FirebaseAPI.googlelogin().then( result => {
    let token = result.credential.accessToken;
    let user = result.user;
    dispatch(receiveCurrentUser(user)); 
  }).catch(errors => dispatch(receiveErrors(errors.responseJSON)))
);