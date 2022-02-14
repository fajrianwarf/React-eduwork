import React from 'react';
import ReactDOM from 'react-dom';

//css
import 'bootstrap/dist/css/bootstrap.min.css';

//components
// import Header from './component/Header';
// import FormAction from './component/Task_Form/FormAction';
import Api from './component/Api';


ReactDOM.render(
  <React.StrictMode>
    <Api />    
  </React.StrictMode>,
  document.getElementById('root')
);



  //Earlier task
    // <Header>
    //   <FormAction />
    // </Header>

    //   <Card bundle="Free" price="Rp 0"/>
    //   <Card bundle="Premium" price="Rp 100.000"/>
    //   <Card bundle="Advanced" price="Rp 200.000"/>
    //   <FormActionBootstrap />