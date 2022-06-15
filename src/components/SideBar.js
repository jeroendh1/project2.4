import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap'

import getRoles from './RequireRole';
function SideBar(){
    return (
<>
        <Navbar className="mb-4" bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        {localStorage.getItem('Token') != null? <Link className="nav-item nav-link" to="/signout">Logout</Link> : <Link className="nav-item nav-link" to="/Login">Login</Link>}
                        {getRoles == 'Admin' ? '' : <Link className="nav-item nav-link" to="/register">Register employee</Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </>
    )
}

export default SideBar