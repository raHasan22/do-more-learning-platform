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
                        <Col lg="4">
                            <LeftNav></LeftNav>
                        </Col>
                        <Col lg="8">
                            <Outlet></Outlet>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;