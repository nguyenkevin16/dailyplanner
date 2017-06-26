import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  null,
  mapDispatchToProps
)(SessionForm);
