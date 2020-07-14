import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const HeaderNav = () => (
  <Nav className="ml-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>

    <Nav.Link as={Link} to="/add">New Question</Nav.Link>

    <Nav.Link as={Link} to="/leaderboard">Leader Board</Nav.Link>
  </Nav>
);

export default HeaderNav;
