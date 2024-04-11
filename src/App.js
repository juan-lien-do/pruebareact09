import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {  useState } from 'react'
import Landing from './landing/Landing'
import Footer from './footer/Footer';
import Menu from './navbar/Navbar';
import UCRepartir from './usecase/UCRepartir';
import Faq from './faq/Faq.jsx';

function App() {
  return (
    <div className='fondo-pagina' style={{position:"relative", paddingBottom:"16em"}}>
      <div style={{minHeight:"100vh"}}>
        <Router >
          <Menu/>
          <Routes>
            <Route path="/repartir/" element={<Landing />} exact />
            <Route path="/repartir/faq/" element={<Faq />} exact />
            <Route path='/repartir/adelante/' element={<UCRepartir />} exact></Route>
            <Route path="/*" element={<Navigate to="/repartir/" replace />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
