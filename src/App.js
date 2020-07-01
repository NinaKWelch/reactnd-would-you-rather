import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

const App = () => {
  const user = ''
  const users = ['Nina Welch', 'John Doe', 'Jane Doe']

  return (
    <div>
      <Header user={user} />
      {user && <Home />}
      {!user && <LoginForm users={users} />}
    </div>
  );
}

export default App;
