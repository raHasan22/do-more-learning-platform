import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
            <Card.Img className='img-fluid' src="https://w0.peakpx.com/wallpaper/975/182/HD-wallpaper-do-more-writing-program-coding-do-more-programing.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className='text-center h1'>
                    Learn Programming With DO MORE
                    </Card.Title>
                <Card.Text className='text-center'>
                Learning to Code Increases Your Earning Potential. Computer programmers enjoy a high-paying career.
                </Card.Text>
            </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Home;