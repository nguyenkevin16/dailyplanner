import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='user flex-grid'>
        <section className='calendar-tasks'>
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