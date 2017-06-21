// frontend/components/dev;

import React from 'react';

class InDev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='greeting'>
        <h1>Daily Planner</h1>
        <p>
          A planner for all your daily needs.
          <br/>
          Currently in development.
        </p>
      </section>
    );
  };
};

export default InDev;