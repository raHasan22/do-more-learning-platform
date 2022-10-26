import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'

const CourseDetail = () => {
    const course = useLoaderData();
    return (
        <div>
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={course.image} />
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                    {course.description}
                </Card.Text>
                <Card.Text><FaStar className='text-warning h5' /> {course.rating} 
                </Card.Text>
                <Card.Text>
                    ${course.price}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetail;