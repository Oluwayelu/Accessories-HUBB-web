import React from 'react'
import { Col, Row, Container, UncontrolledCarousel } from 'reactstrap'
import Header from './Header'
import img from './img'

const Home = () => {
    return (
        <div>
            <Container>
                <Header/>
                <Row>
                    <Col md="12">
                        <div style={{width:'400px', height:'400px'}} className="justify-content-center text-center">
                            <UncontrolledCarousel items={img}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;