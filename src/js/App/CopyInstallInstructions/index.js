import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import CopyButton from './CopyButton';

const copyText = 'npm install -g lad';

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
            value={copyText}
            readOnly
          ></FormControl>
          <InputGroup.Append className='d-none d-md-inline-block'>
            <CopyButton />
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
}
