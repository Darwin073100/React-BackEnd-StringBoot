import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@pages/Home';
import { Career } from '@pages/Career';
import { Student } from '@pages/Student';
import { Inscription } from '@pages/Inscription';
import '@styles/App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/students' element={<Student />}/>
          <Route path='/careers' element={<Career />}/>
          <Route path='/inscriptions' element={<Inscription />}/>
          <Route path='*' element={<p>Not Found</p>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
