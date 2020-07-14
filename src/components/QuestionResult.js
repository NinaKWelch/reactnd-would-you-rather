import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import PageTemplate from './PageTemplate';
import CardTemplate from './CardTemplate';
import StatsTemplate from './StatsTemplate';

const QuestionResult = ({ question, authedUser }) => {
  const {
    name, avatar, optionOne, optionTwo,
  } = question;

  // calculate total votes
  const total = optionOne.votes.length + optionTwo.votes.length;

  return (
    <PageTemplate>
      <Col
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
      >
        <CardTemplate
          title={`Asked by ${name}:`}
          avatar={avatar}
          name={name}
        >
          <StatsTemplate
            votes={optionOne.votes.length}
            totalVotes={total}
            text={optionOne.text}
            selected={optionOne.votes.includes(authedUser)}
          />

          <StatsTemplate
            votes={optionTwo.votes.length}
            totalVotes={total}
            text={optionTwo.text}
            selected={optionTwo.votes.includes(authedUser)}
          />
        </CardTemplate>
      </Col>
    </PageTemplate>

  );
};

QuestionResult.propTypes = {
  question: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    optionOne: PropTypes.shape({
      text: PropTypes.string,
      votes: PropTypes.arrayOf(PropTypes.string),
    }),
    optionTwo: PropTypes.shape({
      text: PropTypes.string,
      votes: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  authedUser: PropTypes.string.isRequired,
};

export default QuestionResult;
