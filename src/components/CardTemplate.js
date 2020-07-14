import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const CardTemplate = ({
  title, avatar, name, children,
}) => (
  <Card>
    <Card.Header>{title}</Card.Header>

    <Card.Body className="text-center">
      <Image
        className="mb-4"
        src={avatar}
        alt={`image of ${name}`}
        fluid
      />
      {children}
    </Card.Body>
  </Card>
);

CardTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardTemplate;
