import React from 'react';
import CardTemplate from './CardTemplate';
// import QuestionAnswer from './QuestionAnswer';
// import QuestionResult from './QuestionResult';

const QuestionCard = ({ question, answered }) => {
    return (
        <CardTemplate
            title={`${question.author} asks:`}
            avatar={question.avatarURL}
        >
            <h4>Would you rather...</h4>
            <p>{`${question.optionOne.text}...`}</p>
            <a href={answered ? "/" : "/"}>View Full</a>
        </CardTemplate>
    );
}

export default QuestionCard;