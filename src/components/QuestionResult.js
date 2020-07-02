import React from 'react';
import CardTemplate from './CardTemplate';
import StatsTemplate from './StatsTemplate';

const QuestionResult = ({ question }) => {
    return (
        <CardTemplate
            title={`Asked by ${question.author}:`}
            avatar={question.avatarURL}
        >
            <StatsTemplate
                votes="1"
                totalVotes="3"
                text={question.optionOne.text}
                selected={true}
            />

            <StatsTemplate
                votes="2"
                totalVotes="3"
                text={question.optionTwo.text}
                selected={false}
            />
        </CardTemplate>
    );
}

export default QuestionResult;