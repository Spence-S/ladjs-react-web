import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import toEmoji from 'gemoji/name-to-emoji';
import { useSetRecoilState } from 'recoil';
import { spinnerState } from '../../recoil/atoms';

const fakeSignIn = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('DONE!');
    }, 1000);
  });

export default function SignInModal({
  show,
  isSignIn,
  handleClose,
  showSignIn,
  showCreateAccount,
  toggleSignIn
}) {
  const verb = isSignIn ? 'Sign In' : 'Sign Up';

  const setSpin = useSetRecoilState(spinnerState);

  async function handleSignIn() {
    setSpin(true);
    const token = await fakeSignIn();
    console.log(token);
    setSpin(false);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className='text-center d-block' closeButton>
        <Modal.Title className='d-inline-block ml-4'>
          {isSignIn
            ? `Welcome Back! ${toEmoji.wave}`
            : `Sign Up Now ${toEmoji.sparkles}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Link
            to='/auth/google'
            className='btn-auth btn-auth-google btn-auth-google-dark my-3'
          >
            <div className='btn-auth-wrapper'>
              <span className='btn-auth-icon'></span>
              <span className='btn-auth-text'>{`${verb} with Google`}</span>
            </div>
          </Link>
          <Link
            to='/auth/google'
            className='btn-auth btn-auth-github btn-auth-github-dark my-3'
          >
            <div className='btn-auth-wrapper'>
              <span className='btn-auth-icon'></span>
              <span className='btn-auth-text'>{`${verb} with Github`}</span>
            </div>
          </Link>
          <div className='hr-text d-flex text-secondary align-items-center'>
            or
          </div>
          <Form>
            <Form.Group>
              <Form.Control
                type='email'
                placeholder='Email address'
                size='lg'
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                placeholder='Password'
                size='lg'
              ></Form.Control>
            </Form.Group>
            {isSignIn ? (
              <Form.Group>
                <Form.Text size='small' className='text-right'>
                  <Link to='/en/forgot-password' className='text-secondary'>
                    Forgot your password?
                  </Link>
                </Form.Text>
              </Form.Group>
            ) : null}
          </Form>
          <Button variant='success' size='lg' block onClick={handleSignIn}>
            {verb}
          </Button>
          <Alert
            variant='light'
            className='alert alert-light border mt-3 text-center mb-0'
          >
            {isSignIn ? 'Need an account? ' : 'Already have an accout? '}
            <Link onClick={toggleSignIn} to='#'>
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </Link>
            {isSignIn ? null : (
              <p className='mt-3 mb-0 text-center'>
                <small>
                  Read our <Link to='#'>Privacy Policy </Link>
                  and <Link to='#'>terms</Link>
                </small>
              </p>
            )}
          </Alert>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
