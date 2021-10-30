import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Layout from '@/components/Layout';

// import reportWebVitals from './reportWebVitals';
import App from './App';

axios.defaults.headers.common['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
