import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component { 
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
      <section className='session-form'>
        <div>
          <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1498104886/notebook_irz3uc.png'/>
          <h3>{ formHeader }</h3>
        </div>

        <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleChange('username') }
            value={ this.state.username }
            placeholder='username'/>

          <input onChange={ this.handleChange('password') }
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
