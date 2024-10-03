import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './style.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';


const HomePage = () => {

  return (
    <div className="starhost-homepage">
      <NavigationBar/>
      <Container className="starhost-main-content">
        <h1 className="starhost-greeting-text">Hello, Joseph!</h1>
        <p className="starhost-subheading-text">Here is what is happening with your property.</p>
        <div className="starhost-property-placeholder-container">
          <div className="starhost-placeholder-items-container">
            <div className="starhost-placeholder-item-box"></div>
            <div className="starhost-placeholder-item-box"></div>
          </div>
          <p className="starhost-property-message">Start by adding your first property</p>
          <Button variant="primary" className="starhost-add-property-button">+ Add new property</Button>
        </div>
      </Container>
      <Footer/>
      <Button variant="dark" className="starhost-feedback-button">Feedback</Button>
    </div>
  );
};

export default HomePage;
