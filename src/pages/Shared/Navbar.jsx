import React, { useContext } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut, setLoading } = useContext(AuthContext);

    const navbar = [
        {
            id: 1,
            title: 'Home',
            link: '/'
        },
        {
            id: 2,
            title: 'About',
            link: '/about'
        },
        {
            id: 3,
            title: 'Career',
            link: '/career'
        }
    ]

    // handle log out button
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err =>  console.log(err.message));
            setLoading(false);

    }

    return (
        <Row className='align-items-center mt-4'>
            <Col></Col>
            <Col>
                <div>
                    {
                        navbar.map(item => {
                            return (
                                <NavLink to={item.link} key={item.id} className={({ isActive }) => isActive ? "text-danger text-decoration-none px-3" : "text-decoration-none px-3 text-black"}>
                                    {item.title}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </Col>
            <Col>
                {user && <FaUserCircle className='display-6' />}
                {
                    user ? <Button onClick={handleLogOut} variant='secondary' className='rounded-0 ms-3 px-4'>Sign Out</Button>
                        : <Button variant='secondary' className='rounded-0 ms-3 px-4'><Link to="/login" className='text-decoration-none text-white'>Login</Link></Button>
                }

            </Col>
        </Row>
    );
};

export default Navbar;