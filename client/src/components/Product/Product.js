import React from 'react'
import {
    Col,
    Row,
    Card,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardBody,
    CardText,
    CardFooter
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Ratings from '../Common/Ratings'

const Product = (props) => {
    return (
        <Col md={12} className='justify-content-center mb-5'>
            <Card body outline color='warning'>
                <Row>
                    <Col md={6}>
                        <CardImg top width="100%" src={require('../../img/a-hubb/earpiece/iphone-3.jpeg')} alt={props.name}/>
                        
                    </Col>
                    <Col md={6}>
                        <CardBody>
                            <CardTitle>{props.name}</CardTitle>
                            <CardSubtitle>&#8358;{props.price}</CardSubtitle>
                            <CardText>In Stock: {props.totalQuantity}</CardText>
                        </CardBody>
                        <br/>
                        <Ratings/>
                        <br/>
                        <CardFooter>
                            <Link to={'/categories/product/'+props.id} className='btn btn-warning btn-lg'>Buy <i className="fas fa-shopping-cart"/></Link>
                        </CardFooter>

                    </Col>
                </Row>
             </Card>
        </Col>
            
    );
};

export default Product;