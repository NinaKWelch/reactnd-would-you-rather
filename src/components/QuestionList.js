import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import QuestionListItem from './QuestionListItem';

const QuestionList = ({ questionIds }) => (
  <Row>
    {questionIds.map((id) => (
      <QuestionListItem key={id} id={id} />
    ))}
  </Row>
);

QuestionList.propTypes = {
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(QuestionList);
