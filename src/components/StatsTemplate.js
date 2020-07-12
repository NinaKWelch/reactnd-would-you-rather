import React from 'react';
import { Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';

const StatsTemplate = ({ votes, totalVotes, text, selected }) => {
    const percentage = (votes / totalVotes) * 100

    return (
        <Row className="mb-4">
            <Col as={Card.Text} className="text-left">
                {`Would you rather ${text}?`}
            </Col>
            <Col xs="auto" as={Card.Text}>
                {selected && <Badge variant="info">Your pick</Badge>}
            </Col>
            <Col xs={12}>
                <ProgressBar now={percentage} />
                <Card.Text>
                    {`${votes} out of ${totalVotes} votes`}
                </Card.Text>
            </Col>
        </Row>
    );
}

export default StatsTemplate;
