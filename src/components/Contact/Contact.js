import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './contact.css'
import img from '../../images/1468923345map.jpg'

const Contact = () => {
  return (
    <div>
      <div className="contact">
  <div className="contact-info">
      <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Your Email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="Subject" />
  </Form.Group>

 
    <textarea className="text-box" rows="5" name="message" placeholder="Message..." class="form-control"></textarea>

 <button className="button-contact mt-3" >Send Message</button>
</Form>
</div>
      <div className="contact-logo" >
        <img src={img} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Contact;