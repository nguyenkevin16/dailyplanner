import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component { 
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (this.props.formType === 'login') {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
        this.props.closeModal()
      ).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
        this.props.closeModal()
      ).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    }
  }

  handleChange(property) {
    return e => (this.setState({ [property]: e.target.value }));
  }

  render() {
    const { formType } = this.props;
    let formHeader, submitButton;

    if (formType === 'login') {
      submitButton = 'Login';
      formHeader = 'Login'
    } else {
      submitButton = 'Create';
      formHeader = 'Create an account'
    }

    return (
      <section className='session-form flex-grid-col'>
        <div className='flex-grid-col'>
          <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1498104886/notebook_irz3uc.png'/>
          <h3>{ formHeader }</h3>
        </div>

        <form onSubmit={ this.handleSubmit } className='flex-grid-col'>
          <input className='box-shadow'
            onChange={ this.handleChange('email') }
            value={ this.state.email }
            placeholder='email'/>

          <input className='box-shadow'
            onChange={ this.handleChange('password') }
            type='password'
            value={ this.state.password }
            placeholder='password'/>

          <button>
            {submitButton}
          </button>
        </form>
      </section>
    );
  }
};

export default SessionForm;
