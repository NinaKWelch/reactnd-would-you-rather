import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import HeaderNav from './HeaderNav';
import ActiveUser from './ActiveUser';

const Header = ({ authedUser }) => {
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Brand className="mr-auto pl-2">Would You Rather</Navbar.Brand>
            <Navbar.Collapse id="navbar-nav">
                <HeaderNav />
                {authedUser && <ActiveUser authedUser={authedUser} />}     
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);
