import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import QnA from './components/QnA';
import Community from './components/Community';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<><Header /><Main /></>} />
          <Route path="/QnA" element={<><Header /><QnA /></>} />
          <Route path="/Community" element={<><Header /><Community /></>} />
        </Routes>
 
      </div>
    </BrowserRouter>
  );
};

export default App;
