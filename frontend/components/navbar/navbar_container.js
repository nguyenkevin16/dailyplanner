import { connect } from 'react-redux';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: firebase.auth().currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
