import React, { useState } from 'react';

const QuestionForm = () => {
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const handleSubmit = event => {
        // TODO: add question to store
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
                />
            </div>
            <div>
                <input 
                    type="text"
                    value={optionTwo}
                    onChange={event => setOptionTwo(event.target.value)}
                    placeholder="Enter option one question"
                />
            </div>
            
           <input type="submit" value="Submit" />
        </form>
    );
}

export default QuestionForm;