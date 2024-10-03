import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
import './style.css';

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <header className="d-flex justify-content-between align-items-center p-3">
        <div className="logo">
          <img src='assets/media/logo.png' alt="Star Host" />
        </div>
        <nav>
          <select className="nav-select">
            <option>Product</option>
          </select>
          <a href="#" className="nav-link">Book a rental</a>
          <select className="nav-select">
            <option>🌐 English</option>
            <option>🌐 French</option>
            <option>🌐 Spanish</option>
          </select>
          <a href="/login" className="nav-link"><button className="btn btn-outline-primary">Log in</button></a>
          <a href="/sign-up" className="nav-link"><button className="btn btn-primary">Sign up for free</button></a>
        </nav>
      </header>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1>Sign up with Star Host</h1>
            <p className="lead">Welcome! You're just a step away from carefree hosting. Here's what to expect when you sign up:</p>
            <ul className="benefits-list">
              <li>Get a free Star Host account and add your first property</li>
              <li>Have your property reviewed by our team within 72 hours</li>
              <li>Take your property live across all major portals such as Booking.com, Airbnb, VRBO, Holidu, Google and more</li>
              <li>Get more bookings, save time and enjoy hosting!</li>
            </ul>
            <div className="host-image">
              <img src='assets/Wildsee.jpeg' alt="Property" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="sign-up-form">
              <div className="alert alert-success">
                <i className="bi bi-check-circle-fill"></i> Please fill out the form to create your free account
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name*</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last name*</label>
                  <input type="text" className="form-control" id="lastName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email*</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone*</label>
                  <div className="input-group">
                    <select className="form-select" style={{ maxWidth: '100px' }}>
                      <option>🇩🇪 +49</option>
                    </select>
                    <input type="tel" className="form-control" id="phone" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City / Region of property*</label>
                  <input type="text" className="form-control" id="city" required />
                  <small className="form-text text-muted">e.g. Mallorca, Spain</small>
                </div>
                <div className="mb-3">
                  <label htmlFor="properties" className="form-label">Number of properties*</label>
                  <input type="number" className="form-control" id="properties" required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="referralCode" />
                  <label className="form-check-label" htmlFor="referralCode">I have a referral code</label>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="termsAgree" required />
                  <label className="form-check-label" htmlFor="termsAgree">
                    By submitting this form you confirm that you have read and agreed with our <a href="#">GTC</a> and <a href="#">privacy policy</a>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up for free</button>
              </form>
              <p className="text-center mt-3">No fixed fees. Cancel any time.</p>

            </div>
          </div>
        </div>

        <div className="mt-5">
          <p>Supported booking portals:</p>
          <div className="booking-portals">
            <img src={require('./img/airbnb.png')} alt="Airbnb" />
            <img src={require('./img/booking.png')} alt="Booking.com" />
            <img src={require('./img/holidu.png')} alt="Holidu" />
            <img src={require('./img/google.png')} alt="Google" />
            <img src={require('./img/vrbo.png')} alt="Vrbo" />
            <img src={require('./img/check24.png')} alt="Check24" />
            <img src={require('./img/hundredrooms.png')} alt="Hundredrooms" />
          </div>
        </div>
      </div>
      <Footer />
      <Button variant="dark" className="starhost-feedback-button">Feedback</Button>
    </div>
  );
};

export default SignUp;