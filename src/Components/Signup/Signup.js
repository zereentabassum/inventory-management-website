import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div>
            <h1 className='pt-3 pb-2'>Sign up</h1>
            <Form className='form'>
            <Form.Group className='text-start pb-3'>
            <Form.Label >Name:</Form.Label>
            <Form.Control type="text" 
            placeholder="Your name" required/>
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label  >Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
              <Form.Label className='text-start'>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
              <Form.Text className='text-success fs-6' id="passwordHelpBlock" >
              Password should be at least 6 characters or more. 
              </Form.Text>
            </Form.Group>
            <Button variant="danger px-5 mb-3" type="submit">
              Signup
            </Button>
            <p>Already have an account? <Link className='text-decoration-none' to='/login'>Login</Link></p>
            
</Form>
        </div>
    );
};

export default Signup;