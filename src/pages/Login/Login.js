import React, { useRef } from 'react';
import { Button ,Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
   
    const navigate = useNavigate();

    // input field useRef
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
    }

    if (user) {
        return (
          navigate('/')
        );
    }

    if (loading) {
        return <Loading></Loading> ;
    }




    // form submit
    const handleSubmitForm = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }



    // redirect register page for new account
    const navigateRegister = () => {
        navigate('/register');


    }
   
    return (
        <div className='container '>
        <h3 className='text-center mt-3 w-100'>LogIn to Continue</h3>
            <Form onSubmit={handleSubmitForm} className='w-75 mx-auto border mt-2 p-5 text-dark shadow rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>


                <Button  variant="secondary" type="submit">
                Log In
                </Button>


                <p className='mt-3'>Reset Password <span className='text-primary' style={{cursor: 'pointer'}} >Forgot Password</span></p>

                <p onClick={navigateRegister} className='mt-3'>Dont't have an Account? <span className='text-primary' style={{cursor: 'pointer'}} >SIGN UP</span></p>

            </Form>
            {/* <ToastContainer></ToastContainer> */}
            <div className='containr w-50 mx-auto'>
                <SocialLogin></SocialLogin>

            </div>
              
            
            
        </div>
       
    );
};

export default Login;
