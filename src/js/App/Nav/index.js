import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import SignInModal from './SignInModal';
import logo from '../../../img/logo-square.svg';

function reducer(state, action) {
  switch (action.type) {
    case 'signup':
      return { show: true, isSignIn: true };
    case 'createAccount':
      return { show: true, isSignIn: false };
    case 'close':
      return { show: false, isSignIn: state.isSignIn };
    case 'toggle':
      return { show: true, isSignIn: !state.isSignIn };
    default:
      throw new Error();
  }
}
// TODO: need to do some heavy lifting
// to get the navigation to flip as it does in
// lad currently as the screen gets smaller
export default function Navigation() {
  const [state, dispatch] = useReducer(reducer, {
    show: false,
    isSignIn: true,
  });

  const handleCreateAccount = () => dispatch({ type: 'createAccount' });
  const handleSignIn = () => dispatch({ type: 'signup' });
  const handleClose = () => dispatch({ type: 'close' });
  const toggleSignIn = () => dispatch({ type: 'toggle' });

  return (
    <>
      <SignInModal
        show={state.show}
        handleClose={handleClose}
        isSignIn={state.isSignIn}
        showSignIn={handleSignIn}
        showCreateAccount={handleCreateAccount}
        toggleSignIn={toggleSignIn}
      />
      <Navbar
        bg='light'
        expand='md'
        fixed='top'
        className='d-flex space-between'
      >
        <Navbar.Brand href='#home'>
          <Image src={logo} width={50} height={50}></Image>
          <h1 className='h2 d-inline-block align-middle m-0'>Lad</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button
            variant={'light'}
            className='btn btn-lg d-block text-left text-md-center text-success'
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Button
            variant={'outline-success'}
            className='btn btn-lg d-block text-left text-md-center text-success'
            onClick={handleCreateAccount}
          >
            Create an account
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
