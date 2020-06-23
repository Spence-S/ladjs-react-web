import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
const copyText = 'npm install lad -g';

export default function CopyButton(props) {
  const target = useRef(null);
  const [copied, setCopied] = useState(false);

  const showCopiedTooltip = () => {
    setCopied(true);
  };
  const hideCopiedTooltip = () => {
    setCopied(false);
  };

  return (
    <>
      <CopyToClipboard text={copyText} onCopy={showCopiedTooltip}>
        <Button ref={target} variant='light' onMouseLeave={hideCopiedTooltip}>
          <FontAwesomeIcon icon={faClipboard} />
          {' Copy'}
        </Button>
      </CopyToClipboard>
      <Overlay target={target.current} placement='bottom' show={copied}>
        {({ target, ...props }) => (
          <Tooltip {...props} id='copy-button-tooltip'>
            Copied!
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
