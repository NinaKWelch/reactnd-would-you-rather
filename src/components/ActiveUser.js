import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { logoutUser } from '../actions/authedUser';

const ActiveUser = ({ authedUser }) => (
  <Navbar.Text className="ml-md-4">
    <small>{`Hi ${authedUser.name}!`}</small>
    {' | '}
    <a
      href="/"
      onClick={() => logoutUser(authedUser)}
    >
      Logout
    </a>
  </Navbar.Text>
);

ActiveUser.propTypes = {
  authedUser: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default connect(null, { logoutUser })(ActiveUser);
