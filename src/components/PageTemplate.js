import React from 'react';
import { Container, Row } from 'react-bootstrap';

const PageTemplate = ({ children }) => (
  <Container>
    <Row className="mt-4">
      {children}
    </Row>
  </Container>
);

export default PageTemplate;
