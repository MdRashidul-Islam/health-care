import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Ser = (props) => {
 const {img, name}=props.service;
  return (
    <div className="animation">
      <CardGroup className="service">
  <Card className="service-item">
    <Card.Img className="service-img"  variant="top" src={img} />
    <Card.Body>
      <Card.Title className="fw-bold text-danger">{name}</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
     <Link to={`/details/${id}`}>
     <button>Details</button>
     </Link>
    </Card.Footer> */}
  </Card> 
</CardGroup>
    

    </div>
  );
};

export default Ser;