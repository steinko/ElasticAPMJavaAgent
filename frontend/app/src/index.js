// Add this to the VERY top of the first file loaded in your app
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {init as initApm } from '@elastic/apm-rum'

import './App.css';

 // eslint-disable-next-line
const apm = initApm ({ 

  serviceName: 'frontend',
  serverUrl: 'https://dcbb03bc44bf4419ab191b571451a8c7.apm.us-west1.gcp.cloud.es.io:443 ',
  secretToken: 'fOBynx2TftqNyJA9Ar' 
  
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
