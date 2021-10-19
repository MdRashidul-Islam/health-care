import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Doctor = (props) => {
  const {name, spe, img, description}= props.doctor;
  return (
    <div className="animation">
       <CardGroup className="doctor-info">
  <Card>
    <Card.Img className="service-img" variant="top" src={img} />
    <Card.Body>
      <Card.Title className="text-primary fw-bold">{name}</Card.Title>
      <Card.Title>{spe}</Card.Title>
      <Card.Text>
       {description}
      </Card.Text>
    </Card.Body>
    
  </Card> 
</CardGroup>
    </div>
  );
};

export default Doctor;