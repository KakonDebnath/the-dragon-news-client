import React from 'react';
import Navbar from '../Shared/Navbar';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const file = form.photo.value;
        const password = form.password.value;
        console.log(name, email, file, password);
        createUser(email, password)
        .then((result) => {
            // Signed in 
            const createdUser = result.user;
            console.log(createdUser);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });

        //   Empty form after successful
        form.reset();

    }

    return (
        <div className='py-3'>
            <Navbar />
            <div style={{ backgroundColor: "#F3F3F3" }} className='p-5 mt-5 w-50 mx-auto'>
                <h3 className='text-center pb-5'>Register your account</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Upload Photo</Form.Label>
                        <Form.Control type="file" name="photo"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Trams & conditions" />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='w-100'>
                        Submit
                    </Button>
                </Form>
                <p className='text-center mt-4'> Have An Account ? <Link to="/login" className='text-decoration-none' style={{ color: "#FF8C47" }}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;