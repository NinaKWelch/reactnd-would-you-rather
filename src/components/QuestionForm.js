import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { handleAddQuestion } from '../actions/questions';

const QuestionForm = (props) => {
  const history = useHistory();

  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  // add aquestion to questions object
  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleAddQuestion(optionOne, optionTwo);

    setOptionOne('');
    setOptionTwo('');

    // return to homepage
    history.push('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Text as="h5">Would you rather...</Form.Text>

      <Form.Group>
        <Form.Label htmlFor="optionOneInput" srOnly>
          Option one question
        </Form.Label>

        <Form.Control
          className="mt-3"
          type="text"
          id="optionOneInput"
          value={optionOne}
          onChange={(e) => setOptionOne(e.target.value)}
          placeholder="Enter option one question"
          required
        />

        <Form.Label htmlFor="optionTwoInput" srOnly>
          Option two question
        </Form.Label>

        <Form.Control
          className="mt-3"
          type="text"
          id="optionTwoInput"
          value={optionTwo}
          onChange={(e) => setOptionTwo(e.target.value)}
          placeholder="Enter option two question"
          required
        />
      </Form.Group>

      <Button type="submit" variant="info" block>
        Submit
      </Button>
    </Form>
  );
};

QuestionForm.propTypes = {
  handleAddQuestion: PropTypes.func.isRequired,
};

export default connect(null, { handleAddQuestion })(QuestionForm);
