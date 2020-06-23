import React from 'react';
import Nav from './Nav';
import CopyInstallInstructions from './CopyInstallInstructions';
import Jumbotron from './Jumbotron';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <CopyInstallInstructions></CopyInstallInstructions>
    </div>
  );
}

export default App;
