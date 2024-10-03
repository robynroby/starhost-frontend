import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './style.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };


  return (
    <div className="starhost-calendar-section">
      <NavigationBar/>
      <div className="starhost-calendar-info-bar">
        <i className="starhost-calendar-info-icon">i</i> To add blocks or manual bookings or interact with the calendar, you can click on the name of the unit.
      </div>
      <Container fluid>

      <Row className="main-content">
        <Col md={3} className="sidebar">
          <h5>0 Properties</h5>
          <Form.Control type="text" placeholder="Search properties" className="search-input" />
        </Col>
        <Col md={9} className="calendar-area">
          <div className="calendar-controls">
            <Button variant="outline-secondary">Today</Button>
            <Button variant="outline-secondary" onClick={handlePrevMonth}>&lt;</Button>
            <Form.Select>
              <option>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</option>
            </Form.Select>
            <Button variant="outline-secondary" onClick={handleNextMonth}>&gt;</Button>
          </div>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={false}
            dateClick={(info) => console.log(info.dateStr)}
            height="auto"
            dayHeaderContent={(args) => {
              return (
                <div className="custom-day-header">
                  <div>{args.date.getDate()}</div>
                  <div>{args.date.toLocaleString('default', { weekday: 'short' })}</div>
                </div>
              )
            }}
          />
          <div className="no-results">
            <h4>No results found</h4>
            <p>We couldn't find any results that match your search term.</p>
          </div>
        </Col>
      </Row>
      </Container>
      <Footer/>
      <Button variant="dark" className="starhost-feedback-button">Feedback</Button>
    </div>
  );
};

export default Calendar;
