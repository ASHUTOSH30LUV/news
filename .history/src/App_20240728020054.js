import React from 'react';
import './App.css';

function App() {
  return (
    <>
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
        <span role="img" aria-label="search">&#128269;</span>
      </div>
    </div>
    <div className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <p>Stay updated with the latest chemical industry trends and innovations.</p>
          <div className="subscribe">
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <h4>Our Brands</h4>
          <ul>
            <li>Chemical Today</li>
            <li>Chemical Today TV</li>
            <li>Chemical Today App</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Clear Your Stock</li>
            <li>Become an Elite Member</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>Blog</li>
            <li>Articles</li>
            <li>Media Kit</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Info Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-bottom">
        <div className="logo"></div>
        <div className="social-icons">
          
          <a href="#"><img src="URL_TO_TWITTER_ICON" alt="Twitter" /></a>
          <a href="#"><img src="URL_TO_YOUTUBE_ICON" alt="YouTube" /></a>
          <a href="#"><img src="URL_TO_LINKEDIN_ICON" alt="LinkedIn" /></a>
          <a href="#"><img src="URL_TO_FACEBOOK_ICON" alt="Facebook" /></a>
          <a href="#"><img src="URL_TO_INSTAGRAM_ICON" alt="Instagram" /></a>
          <br></br>
          <div>© 2023. World Of Chemicals, India. All rights reserved.</div>
        </div>
        </div>
      </div>
      
    </div>
    </>

  );
}

export default App;

