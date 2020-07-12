import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import { Col, Form } from 'react-bootstrap';
import PageTemplate from './PageTemplate'

const LoginForm = ({ users, setAuthedUser }) => {
    const handleChange = e => {
        const id = e.target.value
        setAuthedUser(id)
    }

    const userIds = Object.keys(users)

    return (
        <PageTemplate>
            <Col
                as={Form}
                xs={12}
                md={{ span: 6, offset: 3 }}
                className="text-center"
            >
                <Form.Group>
                    <Form.Label as="h4" className="mb-4">
                        Sign In
                    </Form.Label>
                    <Form.Control
                        as="select"
                        name="users"
                        onChange={handleChange}
                    >
                        <option defaulvalue="true">Select user</option>
                        {userIds.map(id => (
                            <option key={id} value={id}>
                                {users[id].name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Col>
        </PageTemplate>
    );
}
  
export default connect(null, { setAuthedUser })(LoginForm);
