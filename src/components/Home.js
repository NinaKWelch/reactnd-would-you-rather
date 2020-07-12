import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import QuestionList from './QuestionList';

const Home = ({ questions, authedUser }) => {
    const [value, setValue] = useState("unanswered");

    const questionIds = Object.keys(questions)
    const answeredIds = Object.keys(authedUser.answers)

    const filterArr = arr => {
        const newArray = []
        arr.forEach(a => answeredIds.includes(a) ? '' : newArray.push(a))
        return newArray
    }

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <Button
                        variant="outline-primary"
                        onClick={e => setValue(e.target.value)}
                        value="unanswered"
                        active={value === "unanswered"}
                        block
                    >
                        Unanswered Questions
                    </Button>
                </Col>
                <Col>
                    <Button
                        variant="outline-primary"
                        onClick={e => setValue(e.target.value)}
                        value="answered"
                        active={value === "answered"}
                        block
                    >
                        Answered Questions
                    </Button>
                </Col>     
            </Row>
            
            <QuestionList
                questionIds={value === "answered" ? answeredIds : filterArr(questionIds)}
            />
        </Container>
    );
}

export default Home;