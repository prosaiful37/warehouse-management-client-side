import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()


        // error msg
        if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
        }

        //loading process
        if (loading) {
            return <p>Loading...</p>;
        }

        if (user) {
           navigate('/');
        }

        //

    //register handle
    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);


    }


    //navigate to login page
    const loginNavigate = () => {
        navigate('/login')
    }
    return (
        <Container>
            <Row>
                <Col md={12} sm>
                    <Form onSubmit={handleRegister} className='mx-auto w-75 p-5 mt-5  text-dark rounded shadow'>
                        <h5>Registration info</h5>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" name='name' placeholder="Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className='mt-3'>Already Have An Account? <span style={{cursor: 'pointer'}} className='text-primary register' onClick={loginNavigate}>Please Login</span></p>
                        
                        {/* <SocialLogin></SocialLogin> */}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;