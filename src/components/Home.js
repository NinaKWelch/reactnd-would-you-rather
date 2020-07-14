import React, { useState } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import QuestionList from './QuestionList';

const Home = ({ questionIds, authedUser }) => {
  const [value, setValue] = useState('unanswered');
  const answeredIds = Object.keys(authedUser.answers);

  /* create an array of asnwered question ids
  * from question ids array
  */
  const filterAswered = (arr) => {
    const answered = [];

    arr.forEach((a) => (answeredIds.includes(a) ? answered.push(a) : ''));
    return answered;
  };

  /* create an array of unasnwered question ids
  * from question ids array
  */
  const filterUnaswered = (arr) => {
    const unanswered = [];

    arr.forEach((a) => (answeredIds.includes(a) ? '' : unanswered.push(a)));

    return unanswered;
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Button
            variant="outline-info"
            onClick={(e) => setValue(e.target.value)}
            value="unanswered"
            active={value === 'unanswered'}
            block
          >
            Unanswered Questions
          </Button>
        </Col>

        <Col>
          <Button
            variant="outline-info"
            onClick={(e) => setValue(e.target.value)}
            value="answered"
            active={value === 'answered'}
            block
          >
            Answered Questions
          </Button>
        </Col>
      </Row>

      <QuestionList
        questionIds={value === 'answered'
          ? filterAswered(questionIds)
          : filterUnaswered(questionIds)}
      />
    </Container>
  );
};

export default Home;
