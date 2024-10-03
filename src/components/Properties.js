import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './style.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Properties = () => {
  return (
    <div className="starhost-properties-properties">
      <NavigationBar/>
      <Container>
        <h1 className="starhost-properties-title">Properties</h1>
        <div className="starhost-properties-properties-content">
          <div className="starhost-properties-property-placeholder">
            <div className="starhost-properties-property-icon"></div>
            <div className="starhost-properties-property-text"></div>
          </div>
          <div className="starhost-properties-property-placeholder">
            <div className="starhost-properties-property-icon"></div>
            <div className="starhost-properties-property-text"></div>
          </div>
          <h2>Start by adding your first property</h2>
          <Button className="starhost-add-property-button">+ Add new property</Button>
        </div>
      </Container>
      <Footer/>
      <Button variant="dark" className="starhost-feedback-button">Feedback</Button>
    </div>
  );
};

export default Properties;
