import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Dropdown } from 'react-bootstrap';
import './style.css';
import Footer from './Footer';

const Main = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    { icon: '🏊', name: 'Private pool', location: 'Spain' },
    { icon: '🏠', name: 'Vacation house', location: 'Germany' },
    { icon: '👶', name: 'Child friendly', location: 'Spain' },
    { icon: '🏡', name: 'Vacation house', location: 'Spain' },
    { icon: '🏊', name: 'Pool', location: 'Spain' },
    { icon: '🐾', name: 'Pets allowed', location: 'Germany' },
    { icon: '🏘️', name: 'Villa', location: 'Spain' },
    { icon: '🏠', name: 'Vacation house', location: 'Italy' },
    { icon: '🏠', name: 'Chalet', location: 'France' },
  ];

  return (
    <div className="starhost-landingpage-landing-page">
      <Navbar expand="lg" className="starhost-landingpage-navbar">
        <Container>
          <Navbar.Brand href="#home" className="starhost-landingpage-logo">
            <img src={require('./img/logo.png')} alt="Star Host" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#us" className="starhost-landingpage-nav-link">
                Country / Currency
              </Nav.Link>
              <Nav.Link href="#list" className="starhost-landingpage-nav-link">
                List your property
              </Nav.Link>
              <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="starhost-more-dropdown">
                  Account
                </Dropdown.Toggle>
                  <Dropdown.Menu className="starhost-landingpage-dropdown-menu">
                  <Dropdown.Item href="#">Log in for guests</Dropdown.Item>
                  <Dropdown.Item href="#">Inbox</Dropdown.Item>
                  <Dropdown.Item href="#">My bookings</Dropdown.Item>
                  <Dropdown.Item href="#">My favorites</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/login">Login for hosts</Dropdown.Item>
                  <Dropdown.Item href="/sign-up">Get Started Now</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="starhost-landingpage-hero-section">
        <Container>
          <h1 className="starhost-landingpage-hero-title">Find your holiday happiness</h1>
          <Form className="starhost-landingpage-search-form">
            <Row className="align-items-center">
              <Col xs={12} md={3} className="my-1">
                <FormControl type="text" placeholder="Where are you going?" className="starhost-landingpage-input" />
              </Col>
              <Col xs={6} md={2} className="my-1">
                <FormControl type="text" placeholder="Check-in" className="starhost-landingpage-input" />
              </Col>
              <Col xs={6} md={2} className="my-1">
                <FormControl type="text" placeholder="Check-out" className="starhost-landingpage-input" />
              </Col>
              <Col xs={12} md={3} className="my-1">
                <FormControl as="select" className="starhost-landingpage-input">
                  <option>Guests</option>
                </FormControl>
              </Col>
              <Col xs={12} md={2} className="my-1">
                <Button variant="danger" className="starhost-landingpage-search-button">SEARCH</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container className="starhost-landingpage-categories-section">
        <Row>
          {categories.map((category, index) => (
            <Col key={index} xs={4} sm={3} md={2} lg={1} className="mb-3">
              <Button variant="light" className="starhost-landingpage-category-button">
                <span className="starhost-landingpage-category-icon">{category.icon}</span>
                <span className="starhost-landingpage-category-name">{category.name}</span>
                <span className="starhost-landingpage-category-location">{category.location}</span>
              </Button>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="starhost-landingpage-review-section">
        <p>
          Excellent <span className="starhost-landingpage-stars">★★★★★</span> 6,275 reviews on Trustpilot
        </p>
      </div>
      <Footer />
      <Button variant="dark" className="starhost-feedback-button">Feedback</Button>
    </div>
  );
};

export default Main;
