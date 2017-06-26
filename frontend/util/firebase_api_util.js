export const signup = (user) => (
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
);

export const login = (user) => (
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
);

export const logout = () => (
  firebase.auth().signOut()
);

export const googlelogin = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  return firebase.auth().signInWithPopup(provider);
};

export const facebooklogin = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({
    
  });

  return firebase.auth().signInWithPopup(provider);
};