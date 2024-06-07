// src/Preloader.js
import React from 'react';
import '../components/preloader.css';  // Optional: Create and import a CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
