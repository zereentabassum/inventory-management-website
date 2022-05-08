import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignout = () =>{
    signOut(auth);
}

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Container className=''>
  <Navbar.Brand ><i className='fs-3 pe-2'>Marvella</i></Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="px-5 mx-5 header">
    <Navbar.Brand className='px-4' as={Link}to="/home">Home</Navbar.Brand>
    <Navbar.Brand className='px-4' as={Link}to="/blogs">Blogs</Navbar.Brand>
  
    {
                    user?
                    <Button onClick={handleSignout} className='btn btn-light'>Sign out</Button>
                    :
                    <Navbar.Brand className='px-4' as={Link}to="/login">Login</Navbar.Brand>
          }
          
    <Navbar.Brand className='ps-4 pe-1' as={Link}to="/signup">Sign up</Navbar.Brand>

    {
            user && <>
            <Navbar.Brand className='ps-2' as={Link} to="/manageItems">Manage items</Navbar.Brand>
            <Navbar.Brand className='ps-2' as={Link} to="/addItem">Add item</Navbar.Brand>
            <Navbar.Brand className='ps-2' as={Link} to="/myItems">My items</Navbar.Brand>
            </>
  }

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;