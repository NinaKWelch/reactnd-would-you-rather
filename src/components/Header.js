import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import HeaderNav from './HeaderNav';
import ActiveUser from './ActiveUser';

const Header = ({ authedUser }) => (
  <Navbar
    collapseOnSelect
    expand="md"
    bg="light"
  >
    <Navbar.Brand>Would You Rather</Navbar.Brand>

    <Navbar.Toggle aria-controls="navbar-nav" />

    <Navbar.Collapse id="navbar-nav">
      <HeaderNav />

      {authedUser && <ActiveUser authedUser={authedUser} />}
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(Header);
