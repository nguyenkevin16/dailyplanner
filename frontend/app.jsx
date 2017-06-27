// frontend/components/app.jsx

import React from 'react';

import NavbarContainer from './components/navbar/navbar_container';

const App = (props) => (
  <section id='app'>
    <NavbarContainer/>
    { props.children }
  </section>
);

export default App;