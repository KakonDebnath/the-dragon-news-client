import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from './EditorInsights';

const News = () => {

    const singleNews = useLoaderData();
    const { _id, category_id, title, details, image_url } = singleNews;
    console.log(singleNews);
    return (
        <>

            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger" className='rounded-0'><FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorInsights/>
        </>
    );
};

export default News;