import React, { useState } from 'react';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import './style.css';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="starhost-booking-page">
      <NavigationBar/>
      <Container className="starhost-booking-container">
        <h1 className="starhost-booking-title">Bookings</h1>
        <Row className="starhost-booking-header">
          <Col md={8}>
            <Nav variant="tabs" className="starhost-booking-tabs">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'upcoming'}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'past'}
                  onClick={() => setActiveTab('past')}
                >
                  Past
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'cancelled'}
                  onClick={() => setActiveTab('cancelled')}
                >
                  Cancelled
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                >
                  All
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={4} className="starhost-booking-search">
            <Form.Control type="text" placeholder="Search" className="starhost-search-bookings" />
            <Button variant="outline-secondary">Filters</Button>
          </Col>
        </Row>
        <div className="starhost-booking-content">
          <h2>No upcoming bookings</h2>
          <p>Once a guest books, it will show up here.</p>
        </div>
      </Container>
      <Footer />
      <Button variant="dark" className="starhost-feedback-button">Feedback</Button>
    </div>
  );
};

export default Bookings;
