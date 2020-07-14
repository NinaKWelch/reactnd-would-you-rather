import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { logoutUser } from '../actions/authedUser';

const ActiveUser = (props) => {
  const { authedUser, location } = props;
  
  return (
    <Navbar.Text className="ml-md-4">
      <small>{`Hi ${authedUser.name}!`}</small>
      {' | '}
      <a
        href={location.pathname}
        onClick={() => logoutUser(authedUser)}
      >
        Logout
      </a>
    </Navbar.Text>
  );
};

ActiveUser.propTypes = {
  authedUser: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(connect(null, { logoutUser })(ActiveUser));
