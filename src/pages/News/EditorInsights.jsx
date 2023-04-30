import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import { FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

const EditorInsights = () => {
    return (
        <div>
            <Row md={3} className="g-4 mt-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <div className='d-flex align-items-center justify-content-between text-secondary'>
                                <span><FaRegCalendar /></span>
                                <p className='m-0'>{moment().format('MMMM DD YYYY')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <div className='d-flex align-items-center justify-content-between text-secondary'>
                                <span><FaRegCalendar /></span>
                                <p className='m-0'>{moment().format('MMMM DD YYYY')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <div className='d-flex align-items-center justify-content-between text-secondary'>
                                <span><FaRegCalendar /></span>
                                <p className='m-0'>{moment().format('MMMM DD YYYY')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorInsights;