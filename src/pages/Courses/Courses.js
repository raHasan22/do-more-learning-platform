import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://learning-platform-server-side-beryl.vercel.app/courses')
        .then( res => res.json())
        .then( data => setCourses(data));
    }, [])
    return (
        <div>
            <h2>Courses</h2>
            <div className='courses-box'>
                {
                    courses.map(course => <div key={course.id}>
                            <Card style={{ width: '18rem', height: '28rem'}}>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
                                <Card.Text>
                                {course.detail}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;