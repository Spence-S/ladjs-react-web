import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import '../css/app.scss';
import Routes from './Routes';
import Layout from './Layout';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </RecoilRoot>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
