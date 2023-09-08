import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Home from './components/pages/Home';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    
  );
}

export default App;
