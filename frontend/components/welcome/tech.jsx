import React from 'react';

const Tech = () => (
  <section className='tech flex-grid-col'>
    <h1>Featured Technologies</h1>
    
    <div className='flex-grid'>
      <a href='http://rubyonrails.org/' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_300/v1496902781/rails_clj9zs.png' alt='Ruby on Rails' />
        <p>Ruby on Rails</p>
      </a>
      
      <a href='https://facebook.github.io/react/' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_300/v1496902780/react_gi6l5k.svg' alt='ReactJS' />
        <p>React.js</p>
      </a>

      <a href='https://nodejs.org/' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1497336385/node_et5vah.png' alt='NodeJS' />
        <p>Node.js</p>
      </a>

      <a href='https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_300/v1496902779/HTML5_vacnsk.png' alt='HTML5' />
        <p>HTML5</p>
      </a>

      <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/v1496902778/CSS3_ogedms.png' alt='CSS3' />
        <p>CSS3</p>
      </a>

      <a href='https://webpack.github.io/' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_300/v1496902777/webpack_pnbal9.svg' alt='Webpack' />
        <p>Webpack</p>
      </a>

      <a href='https://www.postgresql.org/' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_300/v1496902778/postgresql_zgkjwj.png' alt='PostgreSQL' />
        <p>PostgreSQL</p>
      </a>

      <a href='https://jquery.com/' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_300/v1496902778/jQurery_bwnmte.gif' alt='jQuery' />
        <p>jQuery</p>
      </a>

      <a href='https://firebase.google.com/' target="_blank">
        <img src='https://res.cloudinary.com/nguyenkevin16/image/upload/c_scale,w_300/v1498775415/firebase_zwetgk.png' alt='Firebase' />
        <p>Firebase</p>
      </a>
    </div>
  </section>
);

export default Tech;