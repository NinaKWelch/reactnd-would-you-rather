import React from 'react';
import { Col } from 'react-bootstrap';
import PageTemplate from './PageTemplate';

const NoMatch = () => (
  <PageTemplate>
    <Col as="p">
      This page does not exist.
    </Col>
  </PageTemplate>
);

export default NoMatch;
