import React from 'react';
import img from '../assets/images/sb_logo_512x512.png';

const App = () => {
  return (
    <div>
      <div className="container-fluid">
        <h2 id="heading">ReactJS with Webpack</h2>
        <p>If you see this page, it means that your setting is correct</p>
        <img
          className="image"
          style={{ margin: '0.5em' }}
          height="40"
          width="40"
          src={img}
          alt="React Logo"
        />
      </div>
    </div>
  );
};

export default App;
