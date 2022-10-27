import React from 'react';
import { Button } from 'react-bootstrap';

const Checkout = (props) => {
    const {value, handleCheckout} = props;
    return (
        <div>
            <p><strong>Price:</strong>${value}</p>
            <Button onClick={handleCheckout}>Checkout</Button>
        </div>
    );
};

export default Checkout;