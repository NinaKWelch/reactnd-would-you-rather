import React from 'react'

const LoginForm = ({ users }) => {
    const handleSubmit = event => {
        event.preventDefault()
        alert('Logged in as ' + event.target.value)
    }

    return (
        <select name="users" onChange={handleSubmit}>
            <option value="" selected>Select user</option>
            {users.map(user => (
                <option
                    key={user}
                    value={user}
                >
                    {user}
                </option>
            ))}
        </select>
);
}

export default LoginForm;