import React from 'react';
import Navbar from '../Shared/Navbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='py-3'>
            <Navbar />
            <div style={{backgroundColor: "#F3F3F3"}} className='p-5 mt-5 w-50 mx-auto'>
                <h3 className='text-center pb-5'>Login your account</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='w-100'>
                        Submit
                    </Button>
                </Form>
                <p className='text-center mt-4'>Dont’t Have An Account ? <Link to="/register" className='text-decoration-none' style={{color: "#FF8C47"}}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;