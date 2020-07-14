import React, { useState, useEffect } from 'react';
import PageTemplate from './PageTemplate';
import UserCard from './UserCard';

const LeaderBoard = ({ users }) => {
  const [userData, setUserData] = useState([]);

  // sort arr of objects by property
  const sortArray = (arr, p) => {
    arr.sort((a, b) => b[p] - a[p]);
  };

  useEffect(() => {
    const userIds = Object.keys(users);
    const arr = [];

    /**
    * create an array of objects from users
    * and assign it to userData
    */
    userIds.forEach((id) => {
      const user = users[id];

      arr.push({
        ...user,
        answers: Object.keys(user.answers).length,
        questions: user.questions.length,
        score: Object.keys(user.answers).length + user.questions.length,
      });
    });

    sortArray(arr, 'score');
    setUserData(arr);
  }, [users]);

  return (
    <PageTemplate>
      {userData.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </PageTemplate>
  );
};

export default LeaderBoard;
