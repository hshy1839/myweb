import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import QnA from './components/QnA';
import Community from './components/Community';
import Guestbook from './components/Guestbook';
import Notice from './components/Notice';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<><Header /><Main /></>} />
          <Route path="/QnA" element={<><Header /><QnA /></>} />
          <Route path="/Community" element={<><Header /><Community /></>} />
          <Route path="/Guestbook" element={<><Header /><Guestbook /></>} />
          <Route path="/Notice" element={<><Header /><Notice /></>} />
        </Routes>
 
      </div>
    </BrowserRouter>
  );
};

export default App;
