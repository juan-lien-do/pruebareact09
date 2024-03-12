import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {  useState } from 'react'
import Landing from './landing/Landing'
import Footer from './footer/Footer';
import Menu from './navbar/Navbar';
import UCRepartir from './usecase/UCRepartir';

function App() {
  return (
    <div className='fondo-pagina' style={{position:"relative", paddingBottom:"16em"}}>
      <div style={{minHeight:"100vh"}}>
        <Router >
          <Menu/>
          <Routes>
            <Route path="/repartir/inicio" element={<Landing />} exact />
            <Route path='/repartir/repartir' element={<UCRepartir />} exact></Route>
            <Route path="/repartir/*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
