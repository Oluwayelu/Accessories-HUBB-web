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
    Badge,
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
                    <NavbarBrand className="a-hubb">
                        <div className="row">
                            <div className="logo"></div>
                        </div>
                    </NavbarBrand>
            </Navbar>
            <Navbar color="warning" expand="sm" className="logo-navbar mb-5">
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
                                <NavLink href="/">Home <i className="fas fa-home"/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/categories">Categories <i className="fas fa-list-alt"/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/cart">Cart <i className="fas fa-shopping-cart"/><Badge color="primary" pill>2</Badge></NavLink>
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
                                                <i className="fas fa-search"/>
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </div>
    );
};

export default AppNavbar;