import React from 'react';

import Footer from './components/Footer';
import Spinner from './components/Spinner';
import Nav from './components/Nav';

export default function Layout({ children }) {
  return (
    <div className='vh-100'>
      <div className='d-flex flex-column h-100'>
        <Spinner />
        <Nav />
        <main className='flex-grow-1 d-flex flex-column'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
