import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';

const Home = () => {
//     const [name,   setName] = useState('mario','30');
//     const handleClick = () => {
//             setName('luijg'); 
//     }
    // const popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Header as="h3">Popover right</Popover.Header>
    //       <Popover.Body>
    //         And here's some <strong>amazing</strong> content. It's very engaging.
    //         right?
    //       </Popover.Body>
    //     </Popover>
    //   );      
     return ( 
        <Container >
            <p>Pizza shop</p>
        {/* <div className="home">
 <h2 className="lead text-bg-primary">Homepage</h2>
 <p className="lead text-uppercase">{name}</p>
  
 <button onClick={handleClick} >click it </button>
 <br></br>
 <Button variant="primary" >Primary</Button>
{/*   
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger> 
 </div> */}
 </Container>
       
     );
}
 
export default Home;