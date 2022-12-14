import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Header from '../pages/shared/Header/Header';
import LeftNav from '../pages/shared/leftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
                <Container>
                    <Row>
                        <Col lg="3" className='d-none d-lg-block'>
                            <LeftNav></LeftNav>
                        </Col>
                        <Col lg="9">
                            <Outlet></Outlet>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;