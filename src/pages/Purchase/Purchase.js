import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CourseDetail from '../CourseDetail/CourseDetail';


const Purchase = () => {
    const [courses, setCourses] = useState([])
    const [value, setValue] = useState(0)

    function handleBuy(a){
        console.log(a)
    }

    useEffect(() => {
        fetch('https://learning-platform-server-side-beryl.vercel.app/courses')
        .then( res => res.json())
        .then( data => setCourses(data));
    }, [])

    
    return (
        <div>
            <Container>
                    <Row>
                        <Col lg="9">
                            <div>
                            {
                                courses.map(course => <Card className='mb-4'>
                                    <Card.Header>{course.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>${course.price}</Card.Title>
                                        <Card.Text>
                                           {CourseDetail.detail}
                                        </Card.Text>
                                        <Button onClick={handleBuy(course)} variant="primary">Purchase</Button>
                                    </Card.Body>
                                </Card>)
                            }
                            </div>
                        </Col>
                        <Col lg="3">
                            <div>
                                <p><strong>Total : $</strong> {value} </p>

                                <Button>Purchase</Button>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Purchase;