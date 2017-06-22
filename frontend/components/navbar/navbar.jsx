import React from 'react';

import NavbarLeft from './navbar_left';
import NavbarCenter from './navbar_center';
import NavbarRight from './navbar_right';

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
        <NavbarLeft/>
        <NavbarCenter/>
        <NavbarRight/>
      </section>
    );
  }
}

export default Navbar;