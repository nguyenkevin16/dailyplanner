import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(() => {
      let header = $('.navbar');

      $(window).scroll(() => {
        let scroll = $(window).scrollTop();

        if (scroll >= 200) {
          header.removeClass('no-background').addClass('nav-background box-shadow').fadeIn();
        } else {
          header.removeClass('nav-background box-shadow').addClass('no-background');
        }
      });
    });
  }

  render() {
    return (
      <section className='navbar flex-grid'>
        <section className='navbar-left flex-grid'>
          <h3>Left</h3>
        </section>

        <section className='navbar-center flex-grid'>
          <h3>Daily Planner</h3>
        </section>

        <section className='navbar-right flex-grid'>
          <h3>Right</h3>
        </section>
      </section>
    );
  }
}

export default Navbar;