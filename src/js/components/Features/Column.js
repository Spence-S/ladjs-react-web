import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Column({ heading, bodyText, buttonText }) {
  return (
    <Col xs='12' sm='12' md='3' lg='3' xl='3'>
      <h2>{heading}</h2>
      <p>{bodyText}</p>
      <Button variant='secondary'>{buttonText}</Button>
    </Col>
  );
}
