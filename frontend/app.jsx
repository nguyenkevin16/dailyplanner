// frontend/components/app.jsx

import React from 'react';

import Splash from './components/splash';
import Tech from './components/tech';

const App = () => (
  <section className='app'>
    <Splash/>
    <Tech/>
  </section>
);

export default App;