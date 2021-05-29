import React, { useEffect, useState } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {signout, isAuthenticated} from '../auth/apiAuth'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
    if(history.location.pathname === path)
    {
        return {color: '#caf7e3'}
    }

    else
    return {color: '#f8eded'}
}


const Header = ({history}) => {

    const jwt = isAuthenticated();

    return (
        <div className="header" style={{position:"relative"}}>
        <div className="col-12">
        <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/" className="mr-2">WELLNESS APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                    {jwt &&  <NavDropdown title="USER" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    </NavDropdown>}
                    {jwt &&  <Nav.Link href="/feed" style={isActive(history, '/feed')}>Feed</Nav.Link>}
                    {jwt &&  <Nav.Link href="/post" style={isActive(history, '/post')}>Post</Nav.Link>}
                    {!jwt &&  <Nav.Link href="/signin" style={isActive(history, '/signin')}>Signin</Nav.Link>}
                    {!jwt &&  <Nav.Link href="/signup" style={isActive(history, '/signup')}>Signup</Nav.Link>}
                    {jwt &&  <Nav.Link href="/signin" onClick={()=>signout(()=>{history.push("/signin");})} style={isActive(history, '/signin')} >SIGNOUT</Nav.Link>}
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    </div>
    )
}

export default withRouter(Header);