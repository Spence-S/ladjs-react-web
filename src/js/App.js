import React from 'react';
import ReactDOM from 'react-dom';

// providers
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// base components
import Routes from './Routes';
import Layout from './Layout';

// styles
import '../css/app.scss';

// i18n
import './i18n';

ReactDOM.render(
  <RecoilRoot>
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  </RecoilRoot>,
  document.querySelector('#root')
);
