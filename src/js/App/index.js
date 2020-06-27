import React from 'react';
import Nav from './Nav';
import CopyInstallInstructions from './CopyInstallInstructions';
import Jumbotron from './Jumbotron';
import Features from './Features';
import Footer from './Footer';
import Spinner from './Spinner';

function App() {
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

export default App;
