import React from 'react';
import UserCard from './UserCard';

const LeaderBoard = ({ users }) => {
    return (
        <ul style={{ listStyle: 'none' }}>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </ul>
    );
}

export default LeaderBoard;