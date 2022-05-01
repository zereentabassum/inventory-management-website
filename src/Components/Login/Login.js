import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const emailRef = useRef('');
  const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate()

      let errorMessage;
       if (error) {
           errorMessage=<div>
               <p className='text-danger'>Error: {error.message}</p>
             </div>
     
         }
         let load;
         if (loading) {
           load = <p>Loading...</p>;
         }
     
         if(user){
           navigate('/blogs');
         }

    const emailLogin = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <h1 className='pt-3 pb-2'>Login</h1>                    <Form onSubmit={emailLogin} className='form'>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label  >Email address:</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label className='text-start'>Password:</Form.Label>
                <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
                </Form.Group>
                {errorMessage}
                {load}
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