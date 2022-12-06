import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigationbar = () => {
    return(
        
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">
                    <h2 className="text-primary"><span><i className="bi bi-yelp"></i>Pizza Shop</span></h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav>
                    <Nav.Link className="fw-bold " href="#home">Home</Nav.Link>
                    <Nav.Link className="fw-bold" href="#menu">Menu</Nav.Link>
                    <Nav.Link className="fw-bold" href="#musttry">Must Try</Nav.Link>
                    <Nav.Link className="fw-bold" href="#contactus">Contact us</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
          
          );
        }
export default Navigationbar;