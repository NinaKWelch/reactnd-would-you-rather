import React from 'react';

const ActiveUser = ({ authedUser }) => {
    return (
        <div>
            <span>Hi {authedUser.name}!</span> | <a href="/">Logout</a>
        </div>
    );
}

  
export default ActiveUser;
