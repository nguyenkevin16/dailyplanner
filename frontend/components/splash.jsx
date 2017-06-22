// frontend/components/dev;

import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='splash flex-grid-col'>
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_1600/v1496971636/dustin-lee-19667_eu7hnf.jpg' alt='typewriter background'/>

        <div className='splash-message flex-grid-col text-center'>
          <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1498104886/notebook_irz3uc.png' alt='notebook'/>
          <h1>Daily Planner</h1>
          <p>
            A simple and elegant daily planner and journal.
            <br/>
            Currently in development.
          </p>
        </div>
      </section>
    );
  };
};

export default Splash;