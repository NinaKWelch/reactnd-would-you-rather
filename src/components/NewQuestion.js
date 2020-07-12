import React from 'react';
import { Col } from 'react-bootstrap';
import PageTemplate from './PageTemplate'
import QuestionForm from './QuestionForm';

const NewQuestion = () => {
    return (
        <PageTemplate>
            <Col className="text-center" as="h2" sm={12}>Create a new question</Col>
            <Col className="text-center" as="p" sm={12}>Complete the question</Col>
            <Col sm={12} md={{ span: 8, offset: 2 }}>
                <QuestionForm />
            </Col>
        </PageTemplate>   
    );
}

export default NewQuestion;
