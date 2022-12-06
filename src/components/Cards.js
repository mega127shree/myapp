import React from 'react';
import {useState} from 'react';
import {Container ,Row, Col} from 'react-bootstrap';
import PizzaCards from './PizzaCards';
const Cards = () => {
    const [Menu]=useState([1,2,3,4,5,6])
    return ( 
        <section id="menu" className="bg-light my-3">
<Container>
    <div className="text-center">
    <h3 className="text-primary m-2 p-2">Treat yourself with our Everyday Menu<i class="bi bi-tiktok"></i></h3>
    </div>
<Row>
    {Menu.map((item)=>{
        return (
        <Col md={6} lg={4} className="p-3">
        <PizzaCards/>
         </Col>
        );
    })

    }
   
     
</Row>
</Container>
        </section>
 
    );
}
 
export default Cards;