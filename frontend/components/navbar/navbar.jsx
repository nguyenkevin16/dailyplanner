import React from 'react';

import NavbarLeft from './navbar_left';
import NavbarCenter from './navbar_center';
import NavbarRightIn from './navbar_right_in';
import NavbarRightOut from './navbar_right_out';

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
    const renderRight = () => {
      return this.props.currentUser ? <NavbarRightIn/> : <NavbarRightOut/>
    };

    return (
      <section className='navbar flex-grid'>
        <NavbarLeft/>
        <NavbarCenter/>
        { renderRight() }
      </section>
    );
  }
}

export default Navbar;