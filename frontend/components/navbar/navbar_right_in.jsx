import React from 'react';
import Modal from 'react-modal';
import SessionForm from '../session/session_form';

class NavbarRightIn extends React.Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false, formType: '' };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeAndOpenModal = this.closeAndOpenModal.bind(this);
  }

  componentDidMount() {
    this.setState({ modalIsOpen: false });
  }

  openModal(formType) {
    return () => this.setState({ modalIsOpen: true, formType });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  closeAndOpenModal(formType) {
    return () => {
      this.openModal(formType)();
    };
  }

  render() {
    return (
      <section className='navbar-right flex-grid'>
        <button onClick={ this.openModal('signup') }>
          <h3>Sign Up</h3>
        </button>

        <button onClick={ this.openModal('login') }>
          <h3>Log In</h3>
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='modal box-shadow center'
          overlayClassName='modal-overlay'
          contentLabel="Session Modal">

          <SessionForm
            formType={ this.state.formType }
            closeAndOpenModal={ this.closeAndOpenModal }
            closeModal={ this.closeModal }/>
        </Modal>
      </section>
    );
  }
};

export default NavbarRightIn;