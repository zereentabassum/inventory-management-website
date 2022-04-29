import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className=''>
  <Navbar.Brand ><i className='fs-2'>Marvella</i></Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="px-5 mx-5">
    <Navbar.Brand className='px-4' as={Link}to="/home">Home</Navbar.Brand>
    <Navbar.Brand className='px-4' as={Link}to="/blogs">Blogs</Navbar.Brand>
    <Navbar.Brand className='px-4' as={Link}to="/login">Login</Navbar.Brand>
    <Navbar.Brand className='px-4' as={Link}to="/signup">Sign up</Navbar.Brand>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;