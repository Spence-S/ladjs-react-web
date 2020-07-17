import React from 'react';

// Components
import CopyInstallInstructions from './components/CopyInstallInstructions';
import Jumbotron from './components/Jumbotron';
import Features from './components/Features';

function Home() {
  return (
    <>
      <Jumbotron></Jumbotron>
      <CopyInstallInstructions></CopyInstallInstructions>
      <Features></Features>
    </>
  );
}

export default Home;
