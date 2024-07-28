import React from 'react';
import './Footer.css';

function Footer() {
  return (
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
      </div>
      <div className="footer-bottom">
        <div className="logo"></div>
        <div className="social-icons">
          <div className="icons">
            <a href="https://twitter.com" className="twitter">
              <span className="visually-hidden">Twitter</span>
            </a>
            <a href="https://youtube.com" className="youtube">
              <span className="visually-hidden">YouTube</span>
            </a>
            <a href="https://linkedin.com" className="linkedin">
              <span className="visually-hidden">LinkedIn</span>
            </a>
            <a href="https://facebook.com" className="facebook">
              <span className="visually-hidden">Facebook</span>
            </a>
            <a href="https://instagram.com" className="instagram">
              <span className="visually-hidden">Instagram</span>
            </a>
          </div>
          <p>© 2023. World Of Chemicals, India. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
