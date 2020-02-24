import React, { useState } from 'react'
import { 
    Row,
    Col,
    Collapse,
    Container,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    CardImg,
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from 'reactstrap'

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    return (
        <div>
            <Navbar expand="sm">
                <Container>
                    <NavbarBrand className="a-hubb">
                        <div className="row">
                            <div className="logo"></div>
                        </div>
                    </NavbarBrand>
                </Container>
            </Navbar>
            <Navbar color="warning" expand="sm" className="logo-navbar mb-5">
                <Container>
                    <NavbarBrand href="/">
                    <div className="row">
                            <div className="logo">
                                <CardImg src={require('../../img/a-hubb/logo/logo.jpg')} alt="Accessories Hubb"/>
                            </div>
                        </div>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} style={{bacgroundColor:"#007bff"}}/>
                    <Collapse isOpen={isOpen} navbar className="offcanvas-collapse">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/categories">Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cart">Cart <i className="fas fa-shopping-cart"/></NavLink>
                            </NavItem>
                        </Nav>
                        <Nav>
                            <NavItem>
                                <Row className="search">
                                    <Col>
                                        <InputGroup>
                                            <Input placeholder="Search"/>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="primary" className="search-button">
                                                    Search
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavbar;