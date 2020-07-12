import React from 'react';
import { withRouter } from "react-router-dom";
import { Row } from 'react-bootstrap';
import QuestionListItem from './QuestionListItem';

const QuestionList = ({ questionIds }) => {
    return (
        <Row>
            {questionIds.map(id => (
                <QuestionListItem key={id} id={id} />
            ))}
        </Row>
    );
}

export default withRouter(QuestionList);
