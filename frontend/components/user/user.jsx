import React from 'react';
import Calendar from './cal/calendar';
import Todolist from './todo/todolist_index';

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

        <section className='x-1-4 y-1'>
          <Calendar/>
          <Todolist/>
        </section>

        <section className='journal x-3-4 y-1'>
        </section>
      </section>
    );
  }
}

export default User;