import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './style.css';

const ForgotPassword = () => {
  return (
    <div className="starhost-forgotpassword-page">
      <Container>
        <div className="starhost-forgotpassword-logo-container">
          <img src={require('./img/starhost-logo.PNG')} alt="Star Host" className="starhost-forgotpassword-logo" /> 
        </div>
        <div className="starhost-forgotpassword-card">
          <h2>Don't worry!</h2>
          <p>Please enter your email address. We'll send you a link to reset your password.</p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" className="starhost-forgotpassword-input" />
            </Form.Group>
            <Button variant="primary" type="submit" className="starhost-forgotpassword-submit-button">
              Send me an email
            </Button>
          </Form>
        </div>
      </Container>
      <footer className="starhost-forgotpassword-footer">
        <Container>
          <div className="starhost-forgotpassword-footer-links">
            <a href="#help">Help Center</a>
            <a href="#referral">Referral program</a>
          </div>
          <div className="starhost-forgotpassword-language-selector">
            🌐 English ▼
          </div>
          <div className="starhost-forgotpassword-copyright">
            © 2024 Star Host
          </div>
          <div className="starhost-forgotpassword-legal-links">
            <a href="#imprint">Imprint</a>
            <a href="#privacy">Privacy policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default ForgotPassword;
