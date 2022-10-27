import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Checkout from './Checkout';
import Price from './Price';


const Purchase = () => {
    const [courses, setCourses] = useState([])
    const [value, setValue] = useState(0)

    function handleBuy(a){
        const x = parseInt(a.price);
        setValue(value + x);
    }

    function handleCheckout(){
        alert("Purchase Complete, Let's start coding")
        setValue(0);
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
                                courses.map(course => <Price
                                key={course.id}
                                course={course}
                                handleBuy = {handleBuy}
                                ></Price>)
                            }
                            </div>
                        </Col>
                        <Col lg="3">
                            <Checkout
                            value = {value}
                            handleCheckout = {handleCheckout}
                            >
                            </Checkout>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Purchase;