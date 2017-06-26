export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

// Sync
export const receiveCurrentUser = (currentUser) => {
  type = RECEIVE_CURRENT_USER,
  currentUser
};

export const receiveErrors = (errors) => {
  type = RECEIVE_SESSION_ERRORS,
  errors
};

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});