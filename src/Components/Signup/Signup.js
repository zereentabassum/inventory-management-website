import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate()

 let errorMessage;
  if (error) {
      errorMessage=<div>
          <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    let load;
    if (loading || updating) {
      // load = <p>Loading...</p>;
      <Loading></Loading>
    }


    // if(user){
    //   alert('Your account has been created');
    // }

  const emailSignup = async (event) =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  }
  if(user){
    console.log(user);
    alert('Please check your email for verification')
 }


    return (
        <div>
            <h1 className='pt-3 pb-2'>Sign up</h1>
            <Form onSubmit={emailSignup} className='form'>
            <Form.Group className='text-start pb-3'>
            <Form.Label >Name:</Form.Label>
            <Form.Control type="text"
            placeholder="Your name" name='name' required/>
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label  >Email address:</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
              <Form.Label className='text-start'>Password:</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" required/>
              <Form.Text className='text-success fs-6' id="passwordHelpBlock" >
              Password should be at least 6 characters or more. 
              </Form.Text>
            </Form.Group>
            {errorMessage}
            {load}
            <Button variant="danger px-5 mb-3" type="submit">
              Signup
            </Button>
            <p>Already have an account? <Link className='text-decoration-none' to='/login'>Login</Link></p>
            <div className='d-flex align-items-center'>
            <div style={{height:'1px'}} className='bg-danger w-50'></div>
            <h5 className='mt-2 px-2'>Or</h5>
            <div style={{height:'1px'}} className='bg-danger w-50'></div>
        </div>
            <GoogleSignIn></GoogleSignIn>
            
</Form>
        </div>
    );
};

export default Signup;