import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Form, Button } from 'react-bootstrap';

const QuestionForm = props => {
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        props.handleAddQuestion(optionOne, optionTwo)

        setOptionOne('')
        setOptionTwo('')
    }

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
                    onChange={e => setOptionOne(e.target.value)}
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
                    onChange={e => setOptionTwo(e.target.value)}
                    placeholder="Enter option two question"
                    required
                />
            </Form.Group>
            
            <Button variant="primary" type="submit" block>
                Submit
            </Button>
        </Form>
    );
}
  
export default connect(null, { handleAddQuestion })(QuestionForm);