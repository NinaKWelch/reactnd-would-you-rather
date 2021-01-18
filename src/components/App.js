import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
  // get data
  useEffect(() => {
    props.handleInitialData();
  // eslint-disable-next-line
  }, []);

  const { authedUser, questionIds, users } = props;

  return (
    <Router
      basename={process.env.PUBLIC_URL}
    >
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
                  questionIds={questionIds}
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

const mapStateToProps = ({ authedUser, questions, users }) => {
  // sort objects by property
  const sortByLatest = (obj, p) => Object.keys(obj).sort(
    (a, b) => obj[b][p] - obj[a][p],
  );

  return {
    authedUser: users[authedUser],
    questionIds: sortByLatest(questions, 'timestamp'),
    users,
  };
};

App.propTypes = {
  handleInitialData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { handleInitialData })(App);
