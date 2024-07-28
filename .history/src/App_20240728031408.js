import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
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
    

      <div className="banner"></div>

      <div className="content">
        <div className="article">
          <div className="article-header">
            <span className="tag">Industries</span>
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
          </div>
          <div className="article-meta">
            <span>By Chemical Today.</span>
            <span>19 December 2023</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <div className="additional-content">
            <div className="video-placeholder"></div>
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
          </div>
        </div>
        <div className="sidebar">
          <h2>Latest Updates</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
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
        <div class="icons">
              <a href="/" class="twitter"></a>
              <a href="/" class="youtube"></a>
              <a href="/" class="linkedin"></a>
              <a href="/" class="facebook"></a>
              <a href="/" class="instagram"></a>
          </div>
          <p>© 2023. World Of Chemicals, India. All rights reserved.</p>
        </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default App;

