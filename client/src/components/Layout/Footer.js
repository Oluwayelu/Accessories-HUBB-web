import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Label, Container } from 'reactstrap'

const AppFooter = () => {
    return (
        <div>
            <footer style={{backgroundColor: '#ffc107'}} className="footer navbar-expand  text-center">
                <Container>
                <Row>
                    <Col md="4">
                        <h5>Accessories Hubb</h5>
                        <p>Lorem gvs hsbs js shhbsh kdhd dibd bid di wbidh hbdh h jdbb  dvid jiubdojdo odbod ojdoub dobndodoub diud </p>
                    </Col>
                    <Col md="4">
                        <h5>Follow Us</h5>
                        <p>Lorem gvs hsbs js shhbsh kdhd dibd bid di wbidh hbdh h jdbb  dvid jiubdojdo odbod ojdoub dobndodoub diud </p>
                    </Col>
                    <Col md="4">
                        <h5>Contact Us</h5>
                        <p>Lorem gvs hsbs js shhbsh kdhd dibd bid di wbidh hbdh h jdbb  dvid jiubdojdo odbod ojdoub dobndodoub diud </p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md="2">
                        <h5>Information</h5>
                        <Link to='/#'>About Us</Link><br/>
                        <Link to='/#'>Information</Link><br/>
                        <Link to='/#'>Privacy</Link><br/>
                        <Link to='/#'>Terms and Conditions</Link><br/>
                    </Col>
                    <Col md="2">
                        <h5>Services</h5>
                        <Link to='/#'>About Us</Link><br/>
                        <Link to='/#'>Information</Link><br/>
                        <Link to='/#'>Privacy</Link><br/>
                        <Link to='/#'>Terms and Conditions</Link><br/>
                    </Col>
                    <Col md="2">
                        <h5>Extras</h5>
                        <Link to='/#'>About Us</Link><br/>
                        <Link to='/#'>Information</Link><br/>
                        <Link to='/#'>Privacy</Link><br/>
                        <Link to='/#'>Terms and Conditions</Link><br/>
                    </Col>
                    <Col md="2">
                        <h5>Account</h5>
                        <Link to='/#'>About Us</Link><br/>
                        <Link to='/#'>Information</Link><br/>
                        <Link to='/#'>Privacy</Link><br/>
                        <Link to='/#'>Terms and Conditions</Link><br/>
                    </Col>
                    <Col md="2">
                        <h5>Useful Links</h5>
                        <Link to='/#'>About Us</Link><br/>
                        <Link to='/#'>Information</Link><br/>
                        <Link to='/#'>Privacy</Link><br/>
                        <Link to='/#'>Terms and Conditions</Link><br/>
                    </Col>
                    <Col md="2">
                        <h5>Our Offers</h5>
                        <Link to='/#'>About Us</Link><br/>
                        <Link to='/#'>Information</Link><br/>
                        <Link to='/#'>Privacy</Link><br/>
                        <Link to='/#'>Terms and Conditions</Link><br/>
                    </Col>
                </Row>
                <hr/>
                <Label className="lead"> &copy; 2020 Accessories Hubb  </Label>
                <hr/>
                <Label> Powered by YeLu Tech. </Label>
                </Container>
            </footer>
        </div>
    );
};

export default AppFooter;