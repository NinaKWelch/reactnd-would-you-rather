import React, { useState } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers';
import { handleAnswerQuestion } from '../actions/users';
import QuestionResult from './QuestionResult'
import CardTemplate from './CardTemplate';

const Question = props => {
    const [ option, setOption ] = useState('')

    const { question, authedUser } = props
    const { name, avatar, optionOne, optionTwo } = question
    
    const handleOptionChange = event => {
        setOption(event.target.value);
    };

   const handleSubmit = event => {
        event.preventDefault();
        
        question[option].votes.push(authedUser);

        props.handleAnswerQuestion({
            authedUser,
            qid: question.id,
            answer: option
        })

        setOption('')
    };

    if (question === null) {
        return <p>This question doesn't exist.</p>
    }

    if (optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)) {
        return <QuestionResult question={question} authedUser={authedUser} />
    }

    return (
        <CardTemplate
            title={`${name} asks:`}
            avatar={avatar}
        >
            <h4>Would you rather...</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="radio"
                        id="optionOne"
                        name="options"
                        value="optionOne"
                        onChange={handleOptionChange}
                        checked={option === "optionOne"}
                    />
                    <label htmlFor="optionOne">{optionOne.text}</label>                 
                </div>

                <div>
                    <input
                        type="radio"
                        id="optionTwo"
                        name="options"
                        value="optionTwo"
                        onChange={handleOptionChange}
                        checked={option === 'optionTwo'}
                    />
                    <label htmlFor="optionTwo">{optionTwo.text}</label>
                </div>
            
                <input type="submit" value="Submit" />
            </form>
        </CardTemplate>
    );
};

function mapStateToProps({ authedUser, users, questions }, {id }) {
    const question = questions[id]

    return {
        authedUser,
        question: question ? formatQuestion(question, users[question.author], authedUser) : null
    }
};

export default connect(mapStateToProps, { handleAnswerQuestion })(Question);