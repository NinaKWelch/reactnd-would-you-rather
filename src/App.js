import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

const App = () => {
  const user = 'Nina Welch';
  const users = [
    {
      id: 1,
      name: 'Nina Welch',
      avatarURL: 'https://via.placeholder.com/150',
      questions: {
        answered: 1,
        created: 0
      },
      score: 7
     },
    {
      id: 2,
      name: 'John Doe',
      avatarURL: 'https://via.placeholder.com/150',
      questions: {
        answered: 0,
        created: 1
      },
      score: 6
    },
    {
      id: 3,
      name: 'Jane Doe',
      avatarURL: 'https://via.placeholder.com/150',
      questions: {
        answered: 0,
        created: 1
      },
      score: 5
    }
  ];

  const questions = [
    {
      id: '1',
      author: 'johndoe',
      avatarURL: 'https://via.placeholder.com/150',
      optionOne: { votes: [], text: 'be a front-end developer' },
      optionTwo: { votes: ['ninawelch'], text: 'be a back-end developer' }
    },
    {
      id: '2',
      author: 'janedoe',
      avatarURL: 'https://via.placeholder.com/150',
      optionOne: { votes: [2], text: 'find $50 yourself' },
      optionTwo: { votes: [], text: 'have your best friend find $500' }
    }
  ];

  return (
    <div>
      <Header user={user} />
      {user && <Home questions={questions} user={user} />}
      {!user && <LoginForm users={users} />}
    </div>
  );
}

export default App;
