import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Department.css'
 



const Department = (props) => {
  const {img, name, description}= props.department;

  return (
    <div >
      <CardGroup className="department animation">
  <Card>
    <Card.Img className="dep-img" variant="top" src={img} />
    <Card.Body className="dep-info">
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description.slice(0, 250)}
      </Card.Text>
    </Card.Body>
    <Card.Footer className="border-0 bg-white">
     <button className=" ser-btn">Read More</button>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
  );
};

export default Department;