import React from 'react';
import CardTemplate from './CardTemplate';
import StatsTemplate from './StatsTemplate';

const QuestionResult = ({ question, authedUser }) => {
    const { name, avatar, optionOne, optionTwo } = question

    const total = optionOne.votes.length + optionTwo.votes.length;

    return (
        <CardTemplate
            title={`Asked by ${name}:`}
            avatar={avatar}
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
    );
}

export default QuestionResult;