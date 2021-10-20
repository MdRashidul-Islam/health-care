import React from 'react';
import { Table } from 'react-bootstrap';
import './Room.css'

const RoomRant = () => {
  return (
    <div className="container">
      <h2 className="table-title">ROOM RENT</h2>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>SL</th>
      <th>BED NAME</th>
      <th>CHARGES</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Cabin A</td>
      <td>BDT 7500/=</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Cabin B</td>
      <td>BDT 6500/=</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Cabin C</td>
      <td>BDT 5500/=</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Delux Cabin</td>
      <td>BDT 9000/=</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Ward</td>
      <td>BDT 2700/=</td>
    </tr>
    <tr>
      <td>6</td>
      <td>ICU</td>
      <td>BDT 9000/=</td>
    </tr>
    <tr>
      <td>7</td>
      <td>CCU</td>
      <td>BDT 8000/=</td>
    </tr>
    <tr>
      <td>8</td>
      <td>HDU</td>
      <td>BDT 7000/=</td>
    </tr>
    <tr>
      <td>9</td>
      <td>PICU</td>
      <td>BDT 9000/=</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Chemotherapy</td>
      <td>BDT 500/= (per hour)</td>
    </tr>
    
  </tbody>
</Table>
    </div>
  );
};

export default RoomRant;