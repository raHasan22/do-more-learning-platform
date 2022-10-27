import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authprovider/AuthProvider';
import LeftNav from '../leftNav/LeftNav';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then( () => {})
    .catch( error => console.error(error))
  }
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
              <Navbar.Text>
                <p className='m-lg-2 m-0'><Link className='text-decoration-none' to='/login'>Log In</Link></p>
              </Navbar.Text>
              {
                user?.uid ?
                <Navbar.Text>
                <Button onClick={handleLogOut} variant="dark">Log out</Button>
                </Navbar.Text>:
                <Button variant="dark"><Link className='text-decoration-none text-reset text-light' to='/reg'>Sign Up</Link></Button>
              }
              <Navbar.Text>
                <p className='m-lg-2 m-0'>
                { user?.photoURL ?
                  <Image style={{height: '30px' }} roundedCircle title={user?.displayName} src={ user?.photoURL }></Image>
                  : <FaUser></FaUser>
                }</p>
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