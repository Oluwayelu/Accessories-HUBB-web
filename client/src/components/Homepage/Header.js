import React from 'react'
import { Link } from 'react-router-dom'
import {
    Jumbotron,
    Container
} from 'reactstrap'

const Header = () => {
    return (
        <div>
            <Jumbotron fluid className="header text-center">
                <Container fluid>
                    <h5 className="display-3">Welcome to Accessories Hubb</h5>
                    <p>Get the best Phone and Computer Accessories here</p>
                    <hr/>
                    <Link className="btn btn-dark btn-lg" to="/categories">Buy now</Link>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Header;