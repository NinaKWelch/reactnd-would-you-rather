import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = null;

// eslint-disable-next-line import/prefer-default-export
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());

  return getInitialData().then(
    ({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    },
  );
};
