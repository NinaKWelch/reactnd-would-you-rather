import React from 'react';

const LoginForm = ({ users }) => {
    const handleChange = event => {
        alert('Logged in as ' + event.target.value)
    }

    return (
        <select name="users" onChange={handleChange}>
            <option defaulvalue="true">Select user</option>
            {users.map(user => (
                <option key={user.id} value={user.name}>
                    {user.name}
                </option>
            ))}
        </select>
    );
}

export default LoginForm;