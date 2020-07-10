import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

const QuestionForm = props => {
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        props.handleAddQuestion(optionOne, optionTwo)

        setOptionOne('')
        setOptionTwo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Would you rather...</legend>
            <div>
                <input
                    type="text"
                    value={optionOne}
                    onChange={event => setOptionOne(event.target.value)}
                    placeholder="Enter option one question"
                    required
                />
            </div>
            <div>
                <input 
                    type="text"
                    value={optionTwo}
                    onChange={event => setOptionTwo(event.target.value)}
                    placeholder="Enter option two question"
                    required
                />
            </div>
            
           <input type="submit" value="Submit" />
        </form>
    );
}
  
export default connect(null, { handleAddQuestion })(QuestionForm);