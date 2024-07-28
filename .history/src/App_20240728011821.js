import React from 'react';
import './App.css';

function App() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="URL_TO_CHEMICAL_TODAY_IMAGE" alt="Chemical Today" />
      </div>
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
        <span role="img" aria-label="search">&#128269;</span>
      </div>
    </div>
  );
}

export default App;

