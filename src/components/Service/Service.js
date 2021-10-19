import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  const {id, img, name}= props.service;
  return (
    <div>
     <div className="animation">
     <CardGroup className="single-service">
  <Card >
    <Card.Img className="service-img" variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    <Link className="link" to={`/details/${id}`}>
     <button className="ser-btn">Details</button>
     </Link>
  </Card> 
</CardGroup>
     </div>
       
    </div>
  );
};

export default Service;