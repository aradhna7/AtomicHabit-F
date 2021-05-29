import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import {signout, isAuthenticated} from '../auth/apiAuth'
import {withRouter} from 'react-router-dom'


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
        <header>
        <Navbar variant="dark" expand="lg" collapseOnSelect className='nav' style={{color:"whitesmoke"}}>
            <Container>
            <Navbar.Brand href="/" style={{color:"whitesmoke"}}><i className='fas fa-atom fa-2x'></i> AH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto" style={{color:"whitesmoke"}}>
                    {jwt &&  <Nav.Link href="/feed" style={isActive(history, '/feed')}>Feed</Nav.Link>}
                    {jwt &&  <Nav.Link href="/post" style={isActive(history, '/post')}>Post</Nav.Link>}
                    {jwt &&  <Nav.Link href="/activity" style={isActive(history, '/activity')}>Task</Nav.Link>}
                    {!jwt &&  <Nav.Link href="/signin" style={isActive(history, '/signin')}>Sign In</Nav.Link>}
                    {jwt &&  (<NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="/signin" onClick={() => signout()}>Logout</NavDropdown.Item>
                    </NavDropdown>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default withRouter(Header);