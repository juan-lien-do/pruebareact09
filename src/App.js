import logo from './logo.svg';
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';
import Landing from './landing/Landing';
import Footer from './footer/Footer';
import Menu from './navbar/Navbar';
import UCRepartir from './usecase/UCRepartir';

function App() {
  return (
    <div className='bg-light' style={{ position: "relative", paddingBottom: "16em" }}>
      <div style={{ minHeight: "100vh" }}>
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path='/repartir' element={<UCRepartir />} exact></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
