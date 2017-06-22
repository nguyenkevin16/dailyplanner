// frontend/components/dev;

import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='splash flex-grid col text-center'>
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

export default Splash;