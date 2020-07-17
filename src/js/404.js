import React from 'react';
import Container from 'react-bootstrap/Container';

export default function FourOhFour() {
  return (
    <Container className='text-center py-5'>
      <h1>Page Not Found</h1>
      <p className='lead text-muted'>
        We're sorry, but the page you requested could not be found.
      </p>
    </Container>
  );
}
