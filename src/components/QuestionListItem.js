import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import CardTemplate from './CardTemplate';

const QuestionListItem = (props) => {
  const { user, question } = props;
  const { name, avatarURL } = user;
  const { optionOne, id } = question;

  // shorten the answer for initial display
  const showTeaser = (str) => {
    if (str.length > 12) {
      return str.slice(0, 12);
    }
    return str;
  };

  return (
    <Col xs={12} sm={6} lg={4} className="mb-4">
      <CardTemplate
        title={`${name} asks:`}
        avatar={avatarURL}
        name={name}
      >
        <Card.Text>
          Would you rather
          {' '}
          {showTeaser(optionOne.text)}
          ...
        </Card.Text>

        <Card.Link
          as={Link}
          to={`/questions/${id}`}
        >
          View Full
        </Card.Link>
      </CardTemplate>
    </Col>
  );
};

function mapStateToProps({ users, questions }, { id }) {
  const { author } = questions[id];

  return {
    user: users[author],
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionListItem);
