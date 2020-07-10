import React from 'react';
import { withRouter } from "react-router-dom";
import QuestionListItem from './QuestionListItem';

const QuestionList = ({ questionIds }) => {
    return (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {questionIds.map(id => (
                <QuestionListItem key={id} id={id} />
            ))}

        </ul>
    );
}

export default withRouter(QuestionList);
