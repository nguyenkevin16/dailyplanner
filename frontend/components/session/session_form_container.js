import { connect } from 'react-redux';
import { login, 
         signup,
         googlelogin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  googlelogin: () => dispatch(googlelogin())
});

export default connect(
  null,
  mapDispatchToProps
)(SessionForm);
