import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component { 
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillOutAndEnter = this.fillOutAndEnter.bind(this);
    this.fillField = this.fillField.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formType === 'login' ? this.props.login(user) : this.props.signup(user);
  }

  handleChange(property) {
    return e => (this.setState({ [property]: e.target.value }));
  }

  fillOutAndEnter(username, password) {
    return () => {
      const $usernameInput = $('.email');
      const $passwordInput = $('.password');

      this.fillField(username, $usernameInput);
      setTimeout(
        () => this.fillField(password, $passwordInput), (username.length * 80)
      );
      setTimeout(
        () => this.props.login({email: 'guest@demo.com', password: 'password'}), ((username.length + password.length) * 90)
      );
    };
  }

  fillField(value, $field) {
    let i = 0;

    let timer = setInterval( () => {
      $field.val($field.val() + value[i]);
      i++;

      if (i >= value.length) {
        clearInterval(timer);
      }
    }, 70);
  }

  render() {
    const { formType } = this.props;
    let formHeader, submitButton, otherFormLink;

    if (formType === 'login') {
      submitButton = 'Login';
      formHeader = 'Login';
      otherFormLink = 
        <a onClick={ this.props.closeAndOpenModal('signup') }>
          {'Don\'t have an account?'}
        </a>;
    } else {
      submitButton = 'Create';
      formHeader = 'Create'
      otherFormLink = 
        <a onClick={ this.props.closeAndOpenModal('login') }>
          {'Already have an account?'}
        </a>;;
    }

    return (
      <section className='session-form flex-grid-col'>
        <div className='flex-grid-col session-form-header'>
          <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1498104886/notebook_irz3uc.png' alt='favicon notebook'/>
          <h3>{ formHeader }</h3>
        </div>

        <form onSubmit={ this.handleSubmit } className='flex-grid-col session-form-inputs'>
          <input className='box-shadow email'
            onChange={ this.handleChange('email') }
            value={ this.state.email }
            placeholder='email'/>

          <input className='box-shadow password'
            onChange={ this.handleChange('password') }
            type='password'
            value={ this.state.password }
            placeholder='password'/>

          <button className='raised flex-grid'>
            {submitButton}
          </button>
        </form>

        <div className='flex-grid-col firebase-auth'>
          <button onClick={ this.props.googlelogin }
            className='google raised flex-grid'>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"/>
            <h6>Sign in with Google</h6>
          </button>
          <button onClick={ this.props.facebooklogin }
            className='facebook raised flex-grid'>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg"/>
            <h6>Sign in with Facebook</h6>
          </button>
        </div>

        <div className='flex-grid-col session-form-footer'>
          <a onClick={ this.props.closeModal }>Cancel</a>
          { otherFormLink }
          <a onClick={ this.fillOutAndEnter('guest@demo.com', 'password') }>Demo account</a>
        </div>
      </section>
    );
  }
};

export default SessionForm;
