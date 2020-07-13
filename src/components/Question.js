import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Col, Card, Form, Button,
} from 'react-bootstrap';
import { formatQuestion } from '../utils/helpers';
import { handleAnswerQuestion } from '../actions/users';
import PageTemplate from './PageTemplate';
import QuestionResult from './QuestionResult';
import CardTemplate from './CardTemplate';

const Question = (props) => {
  const [option, setOption] = useState('');

  const { question, authedUser } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    question[option].votes.push(authedUser);

    props.handleAnswerQuestion({
      authedUser,
      qid: question.id,
      answer: option,
    });

    setOption('');
  };

  if (question === null) {
    return (
      <PageTemplate>
        <Col as="p">This question doesn't exist.</Col>
      </PageTemplate>
    );
  }

  const {
    optionOne, optionTwo, name, avatar,
  } = question;

  if (optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)) {
    return <QuestionResult question={question} authedUser={authedUser} />;
  }

  return (
    <PageTemplate>
      <Col
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
      >
        <CardTemplate
          title={`${name} asks:`}
          avatar={avatar}
          name={name}
        >
          <Card.Text as="h4" className="mb-4">
            Would you rather...
          </Card.Text>

          <Form
            className="text-left"
            onSubmit={handleSubmit}
          >
            <Form.Check
              className="mb-3"
              type="radio"
              id="optionOne"
              label={optionOne.text}
              name="options"
              value="optionOne"
              onChange={(e) => setOption(e.target.value)}
              checked={option === 'optionOne'}
            />

            <Form.Check
              className="mb-3"
              type="radio"
              id="optionTwo"
              label={optionTwo.text}
              name="options"
              value="optionTwo"
              onChange={(e) => setOption(e.target.value)}
              checked={option === 'optionTwo'}
            />

            <Button type="submit" block>Submit</Button>
          </Form>
        </CardTemplate>
      </Col>
    </PageTemplate>
  );
};

Question.propTypes = {
  handleAnswerQuestion: PropTypes.func.isRequired,
};

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author]) : null,
  };
}

export default connect(mapStateToProps, { handleAnswerQuestion })(Question);
