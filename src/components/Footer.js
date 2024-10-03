import React from 'react'
import './style.css';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


function Footer() {
  return (
    <div>
        <footer className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Star Host</h5>
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Magazine</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact</h5>
              <ul>
                <li><a href="#">Help for guests</a></li>
                <li><a href="#">Help for hosts</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Hosting</h5>
              <ul>
                <li><a href="#">For hosts</a></li>
                <li><a href="#">For agencies (40+ properties)</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>App</h5>
              <ul>
                <li><a href="#">Download the app</a></li>
              </ul>
            </div>
          </div>
          
          <hr />
          <div className="footer-bottom">
            <div className="language-currency">
              <select>
                <option>🌐 English (US)</option>
                <option>🌐 Spanish</option>
              </select>
              <select>
                <option>USD - US$</option>
              </select>
            </div>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaFacebook /></a>
            </div>
            <div className="legal-links">
              <span>© 2024 Star Host</span>
              <a href="#">Cookie preferences</a>
              <a href="#">GTC</a>
              <a href="#">Privacy policy</a>
              <a href="#">Whistleblower system</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer