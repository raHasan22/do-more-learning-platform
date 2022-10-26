import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mb-4'>
        <Container>
          <Navbar.Brand className='font-weight-bold h2' href="/">DO More</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Text>
              <p className='m-lg-2 m-0'><Link className='text-decoration-none text-reset' to='/'>Home</Link></p>
              </Navbar.Text>
              <Navbar.Text>
                <p className='m-lg-2 m-0'><Link className='text-decoration-none text-reset' to='/courses'>Courses</Link></p>
              </Navbar.Text>
              <Navbar.Text>
                <p className='m-lg-2 m-0'><Link className='text-decoration-none text-reset' to='/'>Blogs</Link></p>
              </Navbar.Text>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;