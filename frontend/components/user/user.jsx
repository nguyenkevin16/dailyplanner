import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.navbar').removeClass('no-background').addClass('nav-background box-shadow');
  }

  componentWillUnmount() {
    $('.navbar').removeClass('nav-background box-shadow').addClass('no-background');
  }

  render() {
    return (
      <section className='user flex-grid'>
        <section className='navbar-dummy'/>

        <section className='calendar-tasks x-thirds'>
          <section className='calendar'>
            testing
          </section>
          
          <section className='tasks'>
            testing
          </section>
        </section>
        <section className='journal'>
          testing
        </section>
      </section>
    );
  }
}

export default User;