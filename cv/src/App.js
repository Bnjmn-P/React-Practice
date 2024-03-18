import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Education from './components/pages/Education';
import Home from './components/pages/Home';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Home />
    </div>
   
  );
}

export default App;
