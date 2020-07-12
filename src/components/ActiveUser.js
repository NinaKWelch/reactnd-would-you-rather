import React from 'react';
import { Navbar } from 'react-bootstrap';

const ActiveUser = ({ authedUser }) => {
    return (
        <Navbar.Text>
            Hi {authedUser.name}! | <a href="/">Logout</a>
        </Navbar.Text>
    );
}

export default ActiveUser;
