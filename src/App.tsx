import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import Monthstatistics from './pages/Monthstatistics/Monthstatistics';
import Header from './shared/Header';
import { Popup } from './shared/Popup/Popup';

function App() {
  return (
    <div className="global_container">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<Monthstatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
