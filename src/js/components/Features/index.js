import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from './Column';

const cols = [
  {
    heading: 'Web Server',
    bodyText:
      'Built on top of Koa, the successor to Express. This full-stack web server uses the latest versions of Pug, Gulp, Sass, PostCSS, Bootstrap, and more.',
    buttonText: 'Front-end »',
  },
  {
    heading: 'API Server',
    bodyText:
      'Inspired by Stripe, the RESTful API server also uses Koa and has a complete stack with error handling, authentication, and tests.',
    buttonText: 'Back-end »',
  },
  {
    heading: 'Job Queue',
    bodyText:
      'Layered on top of Bull and backed by Redis, the job scheduler supports cron and human-readable syntax, child processes, and more.',
    buttonText: 'Learn More »',
  },
  {
    heading: 'Proxy Server',
    bodyText:
      "Redirect HTTP to HTTPS traffic with support for Let's Encrypt Free SSL Certbot validation.",
    buttonText: 'View Docs »',
  },
];

export default function FeaturesRow() {
  return (
    <Container className='py-5'>
      <Row>
        {cols.map((col) => (
          <Column key={col.heading} {...col} />
        ))}
      </Row>
    </Container>
  );
}
