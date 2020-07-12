import React from 'react';
import { Card, Image } from 'react-bootstrap';

const CardTemplate = ({ children, title, avatar, name }) => {
    return (
        <Card>
            <Card.Header>{title}</Card.Header>
            <Card.Body className="text-center">
                <Image
                    className="mb-4"
                    src={avatar}
                    alt={name}
                    fluid
                />
                {children}
            </Card.Body>
        </Card>
    );
}

export default CardTemplate;
