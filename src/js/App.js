import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.scss';
import App from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <RecoilRoot>
    <Router>
      <App />
    </Router>
  </RecoilRoot>,
  document.querySelector('#root')
);
