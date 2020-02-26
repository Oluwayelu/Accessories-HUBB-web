import React from 'react'
import { Col, Row, Container, UncontrolledCarousel } from 'reactstrap'
import Header from './Header'
import img from './img'
import Product from '../Product/Products'
const Home = () => {
    return (
        <div>
            <Container>
                <Header/>
                <Product/>
                <Row>
                    <Col md="12">
                        <div style={{width:'300px', height:'300px'}} className="row justify-content-center">
                            <UncontrolledCarousel items={img}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;