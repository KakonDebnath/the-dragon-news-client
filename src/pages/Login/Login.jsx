import React from 'react';
import Navbar from '../Shared/Navbar';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(location);
    const navigate = useNavigate();
    const handleLoginUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            })

        // reset form after successful
        form.reset();
    }
    return (
        <div className='py-3'>
            <Navbar />
            <div style={{ backgroundColor: "#F3F3F3" }} className='p-5 mt-5 w-50 mx-auto'>
                <h3 className='text-center pb-5'>Login your account</h3>
                <Form onSubmit={handleLoginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='w-100'>
                        Submit
                    </Button>
                </Form>
                <p className='text-center mt-4'>Dont’t Have An Account ? <Link to="/register" className='text-decoration-none' style={{ color: "#FF8C47" }}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;