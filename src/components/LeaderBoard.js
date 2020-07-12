import React, { useState, useEffect } from 'react';
import PageTemplate from './PageTemplate';
import UserCard from './UserCard';

const LeaderBoard = ({ users }) => {
    const [userData, setUserData] = useState([]);

    const sortArray = arr => {
        arr.sort((a, b) => b.score - a.score)
    }
    
    useEffect(() => {
        const userIds = Object.keys(users)
        let arr = []
      
        userIds.forEach(id => {
            let user = users[id]

            arr.push({
                ...user,
                answers: Object.keys(user.answers).length,
                questions: user.questions.length,
                score: Object.keys(user.answers).length + user.questions.length
            })
        })
        sortArray(arr)
        setUserData(arr)
    }, []);

 
    return (
        <PageTemplate>
            {userData.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </PageTemplate>
    );
}

export default LeaderBoard;