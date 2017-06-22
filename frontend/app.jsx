// frontend/components/app.jsx

import React from 'react';

import Welcome from './components/welcome/welcome';
import Navbar from './components/navbar/navbar';

const App = () => (
  <section className='app'>
    <Navbar/>
    <Welcome/>
  </section>
);

export default App;