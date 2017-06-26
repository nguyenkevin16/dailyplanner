export const signup = (user) => (
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
);

export const login = (user) => (
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
);

export const logout = () => (
  firebase.auth().signOut()
);
