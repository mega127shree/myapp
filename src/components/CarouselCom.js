import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Container,Row,Col} from 'react-bootstrap';
const CarouselCom = () => {
    return ( 
        <Container fluid>
    <Row className='justify-content-center '>
        <Col lg={7}>
        <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={require('../assests/five.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cheese Pizza</h3>
          <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100  "
          src={require('../assests/one.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mozoralla cheese</h3>
          <p className="d-none d-sm-block">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100  "
          src= {require('../assests/pizza.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Macrone Cheese</h3>
          <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100  "
          src= {require('../assests/six.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pepper and Cheesy</h3>
          <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
       
    </Carousel>
        </Col>
    </Row>
    <div className="text-center">
    <h2 className="display-5 mt-3">Pizzas for Every Occasion!!</h2>
    <p className="lead text-muted">lorem ipsum dolor sit amet consectetur split </p>

    </div>
    
        </Container>
     );
}
 
export default CarouselCom;