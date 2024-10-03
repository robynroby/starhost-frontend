import React from 'react';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import './style.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Performance = () => {
  return (
    <div className="starhost-performance-performance">
      <NavigationBar/>
      <Container>
        <h1 className="starhost-performance-title">Performance</h1>
        <div className="starhost-performance-performance-card">
          <div className="starhost-performance-year-select">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-year">
                2024
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>2024</Dropdown.Item>
                <Dropdown.Item>2023</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="starhost-performance-no-data">
            <div className="starhost-performance-chart-icon">📊</div>
            <h2>There is no data available yet</h2>
            <p>Once you receive your first bookings, you will find your earnings information on this page.</p>
            <p>Meanwhile, take the time to discover your opportunities to make the most of your property.</p>
            <Button className="starhost-add-property-button">See all your opportunities</Button>
          </div>
        </div>

        <Row className="starhost-performance-info-cards">
          <Col md={6}>
            <div className="starhost-performance-info-card">
              <h3>Guest reviews</h3>
              <p>No reviews yet. Get your first bookings to start receiving reviews.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="starhost-performance-info-card">
              <h3>Do you want to increase your earnings?</h3>
              <p>Discover opportunities to optimize your property and boost your bookings!</p>
              <Button variant="danger">Get Started</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
      <Button variant="dark" className="starhost-feedback-button">Feedback</Button>
    </div>
  );
};

export default Performance;
