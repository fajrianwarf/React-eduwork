import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Card from './component/Card';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Card bundle="Free" price="Rp 0"/>
    <Card bundle="Premium" price="Rp 100.000"/>
    <Card bundle="Advanced" price="Rp 200.000"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
