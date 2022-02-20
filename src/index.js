import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//css
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from './component/Navbar'
import Home from './component/Router/Home';
import Task1 from './component/Router/Task1';
import Task2 from './component/Router/Task2';
import Task3 from './component/Router/Task3';
import Task4 from './component/Router/Task4';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Task-1' element={<Task1 />} />
        <Route path='/Task-2' element={<Task2 />} />
        <Route path='/Task-3' element={<Task3 />} />
        <Route path='/Task-4' element={<Task4 />} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);
