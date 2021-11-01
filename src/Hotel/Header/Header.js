import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Hotel Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/all-package">All-Packages</Nav.Link>
                            {
                                user.email ? <Nav.Link as={Link} to="/add-paclage">Add New Package</Nav.Link> : ""
                            }
                            {
                                user.email ? <Nav.Link as={Link} to="/myorder">My Orders</Nav.Link> : ""
                            }
                        </Nav>
                        <Navbar.Text>
                            <img className="user_img" title={user.displayName} src={user.photoURL} alt="" />
                        </Navbar.Text>
                        {
                            user.email ?
                                <button className="btn btn-danger ms-3" onClick={logOut}>Log Out</button> :
                                <Nav.Link as={Link} className="text-light" to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;