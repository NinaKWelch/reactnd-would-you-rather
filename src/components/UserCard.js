import React from 'react';

const UserCard = ({ user }) => {
    return (
        <li style={{ border: '1px solid gray', margin: 20, padding: 20 }}>
            <img src={user.avatarURL} alt={user.name} />
            <div>
                <h3>{user.name}</h3>
                <div>
                    <div>
                        <p>Answered questions</p>
                        <span>{user.questions.answered}</span>
                    </div>
                    <div>
                        <p>Created questions</p>
                        <span>{user.questions.created}</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h4>Score</h4>
                    <div>{user.score}</div>
                </div>
            </div>
        </li>
    );
}

export default UserCard;