import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: firebase.auth().currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  receiveUser: (user) => dispatch(receiveCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
