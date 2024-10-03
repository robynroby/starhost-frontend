import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';
import Footer from './Footer';

const Login = () => {
  return (
    <div className="login-page">
      <header>
      <Navbar.Brand href="#" className="starhost-logo-container">
            <img src={require('./img/starhost-logo.PNG')} alt="Star Host" />
            <span className="starhost-logo-text">Star Host</span>
      </Navbar.Brand>
      </header>
      
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-form">
              <h1>Welcome back!</h1>
              <p>Log in to your account</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-input">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                    <span className="password-toggle">👁</span>
                  </div>
                </div>
                <div className="mb-3 text-end">
                  <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                <button type="submit" className="btn btn-primary w-100">Log in</button>
              </form>
              <p className="mt-3 text-center">
                Don't have an account yet? <a href="/sign-up" className="sign-up-link">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="feedback-button">
        Feedback
      </div>
      <Footer/>
    </div>
  );
};

export default Login;