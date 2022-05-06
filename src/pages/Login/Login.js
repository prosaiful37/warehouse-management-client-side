import React, { useRef } from 'react';
import { Button ,Form } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();




    // form submit
    const handleSubmitForm = event => {
        event.preventDefault();
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
                    <Form.Control  type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>


                <Button  variant="secondary" type="submit">
                Get Started
                </Button>


                <p className='mt-3'>Reset Password <span className='text-primary' style={{cursor: 'pointer'}} >Forgot Password</span></p>

                <p onClick={navigateRegister} className='mt-3'>Dont't have an Account? <span className='text-primary' style={{cursor: 'pointer'}} >SIGN UP</span></p>

            </Form>
            {/* <ToastContainer></ToastContainer> */}
            <div className='containr w-50 mx-auto'>
                {/* <SocialLogin></SocialLogin> */}

            </div>
              
            
            
        </div>
       
    );
};

export default Login;
