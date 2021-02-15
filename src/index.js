import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './App'; // 방법1
import App from './App'; // 방법2

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
