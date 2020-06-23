import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function LadJumbotron() {
  return (
    <Jumbotron className='mb-0 text-center'>
      <h1>The Best Node.js Framework</h1>
      <p className='lead'>
        Lad scaffolds a Koa webapp and API framework for Node.js
      </p>
      <Button variant='success' size='lg'>
        Try the Demo
      </Button>
    </Jumbotron>
  );
}
