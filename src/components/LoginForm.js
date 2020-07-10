import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

const LoginForm = ({ users, setAuthedUser }) => {
    const handleChange = e => {
        const id = e.target.value
        setAuthedUser(id)
    }

    const userIds = Object.keys(users)

    return (
        <select name="users" onChange={handleChange}>
            <option defaulvalue="true">Select user</option>
            {userIds.map(id => (
                <option key={id} value={id}>
                    {users[id].name}
                </option>
            ))}
        </select>
    );
}
  
export default connect(null, { setAuthedUser })(LoginForm);
