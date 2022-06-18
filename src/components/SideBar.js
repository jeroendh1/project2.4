import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import Logo from "../assets/images/Logo.png"
function SideBar(){
    return (
<>
        <Navbar className="mb-4" bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Image src={Logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/home">Link</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
         {/*   <nav className="navbar">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        {/* <Link to="invoices">Invoices</Link> |{" "}
<Link to="dashboard">Dashboard</Link> */}

                        {/* <link to="/">index</link> */}
                        {/* <link to="/home">home</link> */}
                        {/* <Link class="nav-item nav-link active" href="/" to="/">Home</Link>
                        <Link class="nav-item nav-link" to="/nogiets">Home</Link>
                        <Link class="nav-item nav-link" to="iets">Pricing</Link>
                    </div>
                </div> */}
                {/* </nav>      


            </nav> */}
            </>
    )
}

export default SideBar