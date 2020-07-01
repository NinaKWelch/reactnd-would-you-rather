import React from 'react';

const ActiveUser = ({ user }) => {
    return (
        <div>
            <span>Hi {user}!</span> | <a href="/">Logout</a>
        </div>
    );
}

export default ActiveUser;