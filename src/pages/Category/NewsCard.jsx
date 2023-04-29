import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiBookmark, FiEye, FiShare2 } from "react-icons/fi";
import moment from 'moment';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <div className='d-flex flex-grow-1 align-items-center gap-3'>
                    <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                    <div>
                        <h6 className='m-0'>{author?.name}</h6>
                        <p className='m-0'>{moment(author?.published_date).format('YYYY-MM-DD')}</p>
                    </div>
                </div>
                <div>
                    <Link className='text-secondary p-1'>
                        <FiBookmark />
                    </Link>
                    <Link className='text-secondary p-1'>
                        <FiShare2 />
                    </Link>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='text-decoration-none text-danger'>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-2'>
                    <Rating
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                        style={{color: "#FF8C47"}}
                    ></Rating>
                    <span>
                        {rating?.number}
                    </span>
                </div>
                <div>
                    <FiEye /> {total_view && total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;