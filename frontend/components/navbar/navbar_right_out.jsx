import React from 'react';
import Modal from 'react-modal';
import SessionForm from '../session/session_form';

class NavbarRightOut extends React.Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().logout().then(() => {
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <section className='navbar-right flex-grid'>
        <button onClick={ this.logout }>
          <h3>Sign Out</h3>
        </button>
      </section>
    );
  }
};

export default NavbarRightOut;