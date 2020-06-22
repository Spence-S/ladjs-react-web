import React from "react";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="jumbotron mb-0 text-center">
        <div className="container">
          <h1>The Best Node.js Framework</h1>
          <p className="lead">
            Lad scaffolds a Koa webapp and API framework for Node.js
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
