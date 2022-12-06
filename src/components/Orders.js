import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
const Orders = () => {
    return ( 
        <>
         <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Marghertia</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
           1
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Pepperonni</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
           3
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Chicken Fajita</div>
          Cras justo odio
        </div>
        <Badge bg="primary" pill>
           2
        </Badge>
      </ListGroup.Item>
    </ListGroup>
    <div className="text-end py-3">
    <Button variant="primary">Check Out</Button>
    </div>
    </>
     );
}
 
export default Orders;