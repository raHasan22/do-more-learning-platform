import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Price = (props) => {
    const {handleBuy, course} = props;
    const {name, price, detail } = course;
    return (
        <div>
            <Card className='mb-4'>
                                <Card.Header>{name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>${price}</Card.Title>
                                    <Card.Text>
                                       {detail}
                                    </Card.Text>
                                    <Button onClick={() => handleBuy(course)} variant="primary">Purchase</Button>
                                </Card.Body>
                                </Card>
        </div>
    );
};

export default Price;