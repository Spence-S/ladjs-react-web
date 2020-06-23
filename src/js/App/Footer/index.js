import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../../img/logo-square.svg';

export default function Footer() {
  return (
    <footer className='md-auto'>
      <div className='bg-dark text-white-50'>
        <Container className='py-5 text-center text-md-left'>
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
            {/* <div className='dropdown dropup'>
              <a
                className='btn btn-outline-light dropdown-toggle'
                href='/en'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                id='navbar-dropdown-language-btn'
              >
                English{' '}
              </a>
              <ul
                className='dropdown-menu'
                id='navbar-dropdown-language-ul'
                role='menu'
                aria-expanded='false'
                aria-hidden='true'
                aria-labelledby='navbar-dropdown-language-btn'
              >
                <li>
                  <a className='dropdown-item' href='/zh/'>
                    Chinese{' '}
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/es/'>
                    Spanish{' '}
                  </a>
                </li>
              </ul>
            </div> */}
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
          {/* <Row>
            <Col className='flex-nowrap order-3 order-md-0 d-flex flex-column flex-grow-1'>
              <Dropdown drop='up'>
                <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Chinese</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <hr className='d-md-none'></hr>
              <Image src={logo} width={50} height={50} />
            </Col>
          </Row> */}
        </Container>
      </div>
    </footer>
  );
}
