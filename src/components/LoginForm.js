import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Image, Form } from 'react-bootstrap';
import { setAuthedUser } from '../actions/authedUser';
import PageTemplate from './PageTemplate';
import userIcon from '../img/usericon.png';

const LoginForm = (props) => {
  const { users } = props;

  const handleChange = (e) => {
    const id = e.target.value;

    props.setAuthedUser(id);
  };

  const userIds = Object.keys(users);

  return (
    <PageTemplate>
      <Col xs={12} className="text-center">
        <Image src={userIcon} alt="user avatar" fluid />
      </Col>
      <Col
        as={Form}
        xs={12}
        md={{ span: 6, offset: 3 }}
        className="text-center"
      >
        <Form.Group>
          <Form.Label as="h4" className="my-4">
            Sign In
          </Form.Label>
          <Form.Control
            as="select"
            name="users"
            onChange={handleChange}
          >
            <option defaulvalue="true">Select user</option>
            {userIds.map((id) => (
              <option key={id} value={id}>
                {users[id].name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Col>
    </PageTemplate>
  );
};

LoginForm.propTypes = {
  setAuthedUser: PropTypes.func.isRequired,
};

export default connect(null, { setAuthedUser })(LoginForm);
