import React from 'react'
import {
    Col,
    Card,
    CardImg,
    CardHeader,
    CardBody
} from 'reactstrap'
import {Link} from 'react-router-dom'

const Category = (props) => {
    
    return (
        <Col md={4} className='mb-5'>
            <Card body outline color='warning'>
                <CardHeader>{props.name}</CardHeader>
                <CardImg top width="100%" src={require('../../img/a-hubb/mouse/mouse-2.jpg')} alt={props.name}/>
                <CardBody>
                    <Link to={'/categories/'+props.id} className='btn btn-warning btn-lg'><i className="fa fa-arrow-circle-right"/></Link>
                </CardBody>
            </Card>
        </Col>
    );
};

export default Category;