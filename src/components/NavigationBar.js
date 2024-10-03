import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  return (
    <div>
      <Navbar bg="white" expand="lg" className="starhost-navbar">
        <Container>
          <Navbar.Brand href="#" className="starhost-logo-container">
            <img src={require('./img/nav-logo.png')} alt="Star Host" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className={`starhost-navlink ${location.pathname === '/home' ? 'active' : ''}`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/bookings" className={`starhost-navlink ${location.pathname === '/bookings' ? 'active' : ''}`}>
                Bookings
              </Nav.Link>
              <Nav.Link as={Link} to="/calendar" className={`starhost-navlink ${location.pathname === '/calendar' ? 'active' : ''}`}>
                Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/properties" className={`starhost-navlink ${location.pathname === '/properties' ? 'active' : ''}`}>
                Properties
              </Nav.Link>
              <Nav.Link as={Link} to="/performance" className={`starhost-navlink ${location.pathname === '/performance' ? 'active' : ''}`}>
                Performance
              </Nav.Link>
              <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="starhost-more-dropdown">
                  More
                </Dropdown.Toggle>
                <Dropdown.Menu className="starhost-dropdown-menu">
                  <Dropdown.ItemText className="starhost-user-info">
                    <strong className="starhost-user-initials">JD</strong>
                    <span className="starhost-user-name">Joseph Dante</span>
                    <span className="starhost-user-email">digitalbusiness981@gmail.com</span>
                  </Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#account">Account</Dropdown.Item>
                  <Dropdown.Item href="#invoices">Invoices</Dropdown.Item>
                  <Dropdown.Item href="#payouts">Payouts</Dropdown.Item>
                  <Dropdown.Item href="#help">Help & Resources</Dropdown.Item>
                  <Dropdown.Item href="#contact">Contact</Dropdown.Item>
                  <Dropdown.Item href="#referral">Referral program</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#add-property" className="starhost-add-property-item">+ Add new property</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/" className="starhost-logout-item">Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
