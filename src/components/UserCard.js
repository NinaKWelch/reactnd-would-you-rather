import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card, Image,
} from 'react-bootstrap';

const UserCard = ({ user }) => (
  <Col
    xs={12}
    md={{ span: 10, offset: 1 }}
    lg={{ span: 8, offset: 2 }}
    className="mb-4"
  >
    <Card className="text-center">
      <Row as={Card.Body}>
        <Col xs={12} md={4}>
          <Image
            src={user.avatarURL}
            alt={user.name}
            fluid
          />
        </Col>

        <Col xs={12} md={8} className="text-left">
          <Card.Title className="my-4">
            {user.name}
          </Card.Title>

          <Row className="text-left">
            <Col as={Card.Text}>Answered questions</Col>

            <Col as={Card.Text} xs="auto">{user.answers}</Col>
          </Row>

          <Row className="text-left">
            <Col as={Card.Text}>Created questions</Col>

            <Col as={Card.Text} xs="auto">{user.questions}</Col>
          </Row>
        </Col>
      </Row>

      <Card.Footer>
        Score:
        {' '}
        {user.score}
      </Card.Footer>
    </Card>
  </Col>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    avatarURL: PropTypes.string,
    name: PropTypes.string,
    answers: PropTypes.number,
    questions: PropTypes.number,
    score: PropTypes.number,
  }).isRequired,
};

export default UserCard;
