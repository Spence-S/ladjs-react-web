import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function CopyInstallInstructions() {
  return (
    <div className='bg-dark py-5 text-center'>
      <div className='d-flex justify-content-center'>
        <InputGroup size='lg' className='w-auto'>
          <InputGroup.Prepend>
            <InputGroup.Text className='border border-light bg-transparent text-white'>
              <FontAwesomeIcon icon={faTerminal} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className='border border-light bg-transparent text-white'
            value='npm install -g lad'
            readOnly
          ></FormControl>
          <InputGroup.Append className='d-none d-md-inline-block'>
            <Button variant='light'>
              <FontAwesomeIcon icon={faClipboard} />
              {' Copy'}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
}
