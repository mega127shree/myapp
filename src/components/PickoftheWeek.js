import React from 'react';
import {Container,Image,Row,Col,Button} from 'react-bootstrap';

const PickoftheWeek = () => {
    return ( 
        <section id="musttry" className='my-3'>
<div className="text-center my-2 py-3">
    <h2 className='display-6 text-primary'><i class="bi bi-search-heart"></i>Pick of the Week!</h2>
</div> 
        <Container>
            <Row className="align-items-center">
                <Col md={7}>
                    <Image src={require('../assests/five.jpg')} fluid={true}alt="center" rounded />
                </Col>
                <Col md={5}>
                <div className='py-3'>
             <h2 className="h1">Double Cheese Fajita</h2>
             <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione adipisci quidem illo, quam omnis qui enim sit 
             </p>
             <Button variant="primary" ><i class="bi bi-basket"></i>Buy Now</Button>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
     );
}
 
export default PickoftheWeek;