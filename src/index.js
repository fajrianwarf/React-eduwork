import React from 'react';
import ReactDOM from 'react-dom';

//css
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './component/Header';
import NewsApi from './component/NewsApi';


ReactDOM.render(
  <React.StrictMode>
    <Header>
      <NewsApi />
    </Header>    
  </React.StrictMode>,
  document.getElementById('root')
);



  //Earlier task
    // <Header>
    //   <FormAction />
    // </Header>
    
    //   <FormActionBootstrap />
    
    //   <Card bundle="Free" price="Rp 0"/>
    //   <Card bundle="Premium" price="Rp 100.000"/>
    //   <Card bundle="Advanced" price="Rp 200.000"/>