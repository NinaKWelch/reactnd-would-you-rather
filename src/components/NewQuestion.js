import React from 'react';
import QuestionForm from './QuestionForm';

const NewQuestion = () => {
    return (
        <div style={{ border: '1px solid gray'}}>
            <h2>Create a new question</h2>
            <p>Complete the question</p>
            <QuestionForm />
        </div>
    );
}

export default NewQuestion;
