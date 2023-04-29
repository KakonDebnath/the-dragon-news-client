import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUser, FaUserCircle } from "react-icons/fa";

const Navbar = () => {

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
                <FaUserCircle className='display-6'/>
            </Col>
        </Row>
    );
};

export default Navbar;