import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../../img/logo-square.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='md-auto'>
      <div className='bg-dark text-white-50'>
        <Container className='py-5 text-center text-md-left'>
          <div className='d-flex flex-column flex-md-row'>
            <div className='flex-nowrap order-3 order-md-0 d-flex flex-column flex-grow-1'>
              <hr className='d-md-none' />
              <Dropdown drop='up'>
                <Dropdown.Toggle variant='outline-light' id='dropdown-basic'>
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Chinese</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <hr className='d-md-none'></hr>
              <div className='mt-auto'>
                <Image
                  className='d-inline-block mr-2'
                  src={logo}
                  width='50'
                  height='50'
                  alt=''
                />
                <div className='d-inline-block text-muted'>© Lad</div>
              </div>
            </div>
            <div className='flex-wrap flex-fill'>
              <h5 className='mb-2'>Developers</h5>
              <ul className='list-unstyled'>
                <li>
                  <a className='text-light' href='https://github.com/ladjs/lad'>
                    Documentation
                  </a>
                </li>
                <li className='text-muted'>
                  <small>Current version: v0.0.20</small>
                </li>
              </ul>
            </div>
            <div className='flex-wrap flex-fill'>
              <h5 className='mb-2'>Resources</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link className='text-light' to='/en/support'>
                    Support
                  </Link>
                </li>
                <li>
                  <Link className='text-light' to='/en/privacy'>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className='text-light' to='/en/terms'>
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div className='flex-wrap flex-fill d-flex flex-column'>
              <div>
                <h5 className='mb-2'>Company</h5>
                <ul className='list-unstyled'>
                  <li>
                    <a className='text-light' href='/en/about'>
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <ul className='list-inline mb-0'>
                  <li className='list-inline-item'>
                    <a
                      className='text-light'
                      href='https://twitter.com/niftylettuce'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faTwitter} size='2x' />
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a
                      className='text-light'
                      href='https://github.com/ladjs/lad'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FontAwesomeIcon icon={faGithub} size='2x' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
