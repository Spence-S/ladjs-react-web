import React from 'react';
import Nav from './Nav';
import CopyInstallInstructions from './CopyInstallInstructions';
import Jumbotron from './Jumbotron';
import Features from './Features';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <CopyInstallInstructions></CopyInstallInstructions>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}

export default App;
