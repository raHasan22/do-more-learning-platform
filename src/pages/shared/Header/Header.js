import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LeftNav from '../leftNav/LeftNav';

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
                <p className='m-lg-2 m-0'><Link className='text-decoration-none text-reset' to='/blogs'>Blogs</Link></p>
              </Navbar.Text>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Navbar.Text>
                <p className='m-lg-2 m-0'><Link className='text-decoration-none text-reset' to='/login'>Log In</Link></p>
              </Navbar.Text>
            </Nav>
            <div className='d-lg-none'>
              <LeftNav></LeftNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;