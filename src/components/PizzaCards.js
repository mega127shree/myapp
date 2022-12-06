import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const PizzaCards = () => {
    return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require('../assests/pizza.jpg')}/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="text-center">
          <Button variant="primary">Add to Basket</Button>
          </div>
          
        </Card.Body>
      </Card>
     );
}
 
export default PizzaCards;