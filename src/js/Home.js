import React from 'react';
import Nav from './components/Nav';
import CopyInstallInstructions from './components/CopyInstallInstructions';
import Jumbotron from './components/Jumbotron';
import Features from './components/Features';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

function Home() {
  return (
    <>
      <Spinner />
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <CopyInstallInstructions></CopyInstallInstructions>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}

export default Home;
