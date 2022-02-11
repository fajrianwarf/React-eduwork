import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Card from './component/Card';
// import FormActionBootstrap from './component/FormActionBootstrap';
import Header from './component/Header';
import FormAction from './component/FormAction';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header>
      <FormAction />
    </Header>

      {/*<Card bundle="Free" price="Rp 0"/>
      <Card bundle="Premium" price="Rp 100.000"/>
      <Card bundle="Advanced" price="Rp 200.000"/>
      <FormActionBootstrap /> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
