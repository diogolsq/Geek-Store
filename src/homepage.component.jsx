import React from "react";

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Hats </h1>
          <h2 className='subtitle'> Shop Now</h2>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Jackets </h1>
          <h2 className='subtitle'> Shop Now</h2>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Sneakers </h1>
          <h2 className='subtitle'> Shop Now</h2>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Womans </h1>
          <h2 className='subtitle'> Shop Now</h2>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Mans </h1>
          <h2 className='subtitle'> Shop Now</h2>
        </div>
      </div>
    </div>
  </div>

);

export default HomePage;
