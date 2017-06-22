import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class NavbarRight extends React.Component {
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
          Sign Up
        </button>

        <button onClick={ this.openModal('login') }>
          Log In
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='modal box-shadow'
          overlayClassName='modal-overlay'
          contentLabel="Session Modal">

          <SessionFormContainer
            formType={ this.state.formType }
            closeAndOpenModal={ this.closeAndOpenModal }
            closeModal={ this.closeModal }/>
        </Modal>
      </section>
    );
  }
};

export default NavbarRight;