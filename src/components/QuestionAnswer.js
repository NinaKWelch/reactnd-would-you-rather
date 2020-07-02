import React, { useState } from 'react';
import CardTemplate from './CardTemplate';

const QuestionAnswer = ({ question, user }) => {
    const [value, setValue] = useState('a');

    const handleChange = event => {
        setValue(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        value === 'a' ? 
            question.optionOne.votes.concat([user]) : 
            question.optionTwo.votes.concat([user]);
    };

    return (
        <CardTemplate
            title={`${question.author} asks:`}
            avatar={question.avatarURL}
        >
            <h4>Would you rather...</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="radio"
                        id="optionOne"
                        name="options"
                        value="a"
                        onChange={handleChange}
                        checked={value === 'a'}
                    />
                    <label htmlFor="optionOne">{question.optionOne.text}</label>                 
                </div>

                <div>
                    <input
                        type="radio"
                        id="optionOne"
                        name="options"
                        value="b"
                        onChange={handleChange}
                        checked={value === 'b'}
                    />
                    <label htmlFor="contactChoice2">{question.optionTwo.text}</label>
                </div>
            
                <input type="submit" value="Submit" />
            </form>
        </CardTemplate>
    );
}

export default QuestionAnswer;