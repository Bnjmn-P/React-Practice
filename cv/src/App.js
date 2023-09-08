import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Education />
      <Skills />
    </div>
    
  );
}

export default App;
