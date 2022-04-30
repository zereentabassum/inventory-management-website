import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Login = () => {
    return (
        <div>
            <h1 className='pt-4 pb-3'>Login</h1>                    <Form className='form'>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label  >Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label className='text-start'>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="danger px-5 mb-3" type="submit">
                Login
                </Button>
                <br />
    <Button className='text-decoration-none'  variant='link'>Forgot Password? Reset</Button>
    <div className='d-flex align-items-center'>
        <div style={{height:'1px'}} className='bg-danger w-50'></div>
        <h5 className='mt-2 px-2'>Or</h5>
        <div style={{height:'1px'}} className='bg-danger w-50'></div>
    </div>
  
    <GoogleSignIn></GoogleSignIn>
    <p>Don't have an account? <Link className='text-decoration-none' to='/signup'>Sign up</Link></p>
   
                
</Form>
        </div>
    );
};

export default Login;