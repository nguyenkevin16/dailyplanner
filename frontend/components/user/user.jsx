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

        <section className='calendar-tasks x-1-3 y-1'>
          <section className='calendar x-1 y-1-3'>
            testing
          </section>
          
          <section className='tasks x-1 y-2-3'>
            testing
          </section>
        </section>

        <section className='journal x-2-3 y-1'>
          testing
        </section>
      </section>
    );
  }
}

export default User;