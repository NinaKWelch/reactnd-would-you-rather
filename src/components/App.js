import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'
import Header from './Header';
import LoginForm from './LoginForm';
import Home from './Home';
import NewQuestion from './NewQuestion';
import Question from './Question';
import LeaderBoard from './LeaderBoard';

const App = props => {
  useEffect(() => {
    props.handleInitialData()
   }, [] )

  const { authedUser, questions, users } = props

  return (
    <Router>
      <Fragment>
        <LoadingBar />

        <div>
          <Header authedUser={authedUser} />
          {authedUser &&
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
                <Home questions={questions} authedUser={authedUser} />
              </Route>
            </Switch>
          }
          
          {!authedUser &&
            <Switch>
              <Route path="/">
                <LoginForm users={users} />
              </Route>
            </Switch>
          }
        </div>
      </Fragment>
    </Router>
  );
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    authedUser: users[authedUser],
    questions,
    users
  }
};

export default connect(mapStateToProps, { handleInitialData })(App);