import React from 'react';
import { Button } from 'react-bootstrap';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
  

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

      // if(user){
      //   navigate('/home');
      // }

      if(user){
        navigate(from, { replace: true });
    }

    return (
        <div>
            {errorMessage}
            {load}
            <Button onClick={()=> signInWithGoogle()} className='btn btn-danger px-5 mt-2 mb-4'>Sign in With Google</Button>
        </div>
    );
};

export default GoogleSignIn;