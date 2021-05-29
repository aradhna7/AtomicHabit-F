import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {signout, isAuthenticated} from '../auth/apiAuth'


const Header = () => {


    return (
        <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="mr-2">WELLNESS APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                    <NavDropdown title="USER" id="basic-nav-dropdown">
                        {isAuthenticated() &&  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>}
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    {isAuthenticated() &&  <Nav.Link href="/post" onClick={()=>signout()}>Post</Nav.Link>}
                    {!isAuthenticated() &&  <Nav.Link href="/signin">Signin</Nav.Link>}
                    {!isAuthenticated() &&  <Nav.Link href="/signup">Signup</Nav.Link>}
                    {isAuthenticated() &&  <Nav.Link href="/signin" onClick={()=>signout()}>SIGNOUT</Nav.Link>}
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
    )
}

export default Header;