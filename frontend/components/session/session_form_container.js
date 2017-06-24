import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.formType,
  closeModal: ownProps.closeModal
});

const mapDispatchToProps = (dispatch, ownProps) => {
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
