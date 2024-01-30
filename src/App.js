import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {  useState } from 'react'
import Landing from './landing/Landing'
import Footer from './footer/Footer';
import Menu from './navbar/Navbar';
import UCRepartir from './usecase/UCRepartir';

function App() {
  return (
    <div className='bg-light'>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path='/repartir' element={<UCRepartir />} exact></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
