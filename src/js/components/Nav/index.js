import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import SignInModal from './SignInModal';
import logo from '../../../img/logo-square.svg';
import { useRecoilState } from 'recoil';
import { signInModalState } from '../../recoil/atoms';

export default function Navigation() {
  const [state, setState] = useRecoilState(signInModalState);
  const handleCreateAccount = () => setState({ show: true, isSignIn: false });
  const handleSignIn = () => setState({ show: true, isSignIn: true });
  const handleClose = () => setState({ ...state, show: false });
  const toggleSignIn = () => setState({ ...state, isSignIn: !state.isSignIn });

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
        <Navbar.Brand href='/'>
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
