import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from './Footer';
import './home.css';
import NavigationBar from './NavigationBar';

const HomePage = () => {
  return (
    <div className="starhost-homepage">
      <NavigationBar />
      <Container className="starhost-main-content">
        <h1 className="starhost-greeting-text">Hello, joseph</h1>
        <p className="starhost-subheading-text">Here's an overview of your property management.</p>
        <Row className="g-4 justify-content-center">
          <Col>
            <Card className="starhost-info-card-home">
              <Card.Body>
                <Card.Title>Total Properties</Card.Title>
                <Card.Text className="starhost-info-value">22</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="starhost-info-card-home">
              <Card.Body>
                <Card.Title>Total Bookings</Card.Title>
                <Card.Text className="starhost-info-value">4</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col >
            <Card className="starhost-info-card-home">
              <Card.Body>
                <Card.Title>Recent Activities</Card.Title>
                <ul className="starhost-activity-list">
                  <li>Joined on 27-06-2020</li>
                  <li>New booking received for Property 2345678</li>
                  <li>Updated amenities for Property 2334555</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
