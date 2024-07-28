import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="nav-item">Posts</div>
      <div className="nav-item">Sectors</div>
      <div className="nav-item">Insights</div>
      <div className="nav-item">Spotlight</div>
      <div className="nav-item">Product</div>
      <div className="nav-item">Events</div>
      <div className="nav-item">Equipment</div>
      <div className="nav-item">Sustainability</div>
      <div className="nav-item">Digitalization</div>
      <div className="search-icon">
        {/* <span role="img" aria-label="search">&#128269;</span> */}
      </div>
    </div>
  );
}

export default Navbar;


