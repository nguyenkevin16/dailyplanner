// frontend/components/app.jsx

import React from 'react';

import Welcome from './components/welcome/welcome';
import NavbarContainer from './components/navbar/navbar_container';

const App = () => (
  <section id='#app'>
    <NavbarContainer/>
    <Welcome/>
  </section>
);

export default App;