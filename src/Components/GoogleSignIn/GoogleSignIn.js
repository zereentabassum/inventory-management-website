import React from 'react';
import { Button } from 'react-bootstrap';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import {FcGoogle} from 'react-icons/fc';

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
        // load = <p>Loading...</p>;
        <Loading></Loading>
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
            {/* <Button onClick={()=> signInWithGoogle()} className='btn btn-outline-danger bg-light px-5 mt-2 mb-4'>Continue With Google <FcGoogle /> </Button> */}
            <Button onClick={()=> signInWithGoogle()} variant="outline-danger" className='px-5 mt-2 mb-4' >  <FcGoogle size={24}/>  Continue With Google  </Button>{' '}
        </div>
    );
};

export default GoogleSignIn;