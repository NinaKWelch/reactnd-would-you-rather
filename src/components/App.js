import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import Header from './Header';
import LoginForm from './LoginForm';
import Home from './Home';
import NewQuestion from './NewQuestion';
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import NoMatch from './NoMatch';

const App = (props) => {
  useEffect(() => {
    props.handleInitialData();
  }, []);

  const { authedUser, questions, users } = props;

  return (
    <Router>
      <>
        <Header authedUser={authedUser} />
        <LoadingBar />
        {authedUser
          ? (
            <Switch>
              <Route
                path="/questions/:id"
                render={({ match }) => (
                  <Question id={match.params.id} />
                )}
              />
              <Route path="/add">
                <NewQuestion />
              </Route>
              <Route path="/leaderboard">
                <LeaderBoard users={users} />
              </Route>
              <Route exact path="/">
                <Home
                  questions={questions}
                  authedUser={authedUser}
                />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/">
                <LoginForm users={users} />
              </Route>
            </Switch>
          )}
      </>
    </Router>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser: users[authedUser],
  questions,
  users,
});

export default connect(mapStateToProps, { handleInitialData })(App);
