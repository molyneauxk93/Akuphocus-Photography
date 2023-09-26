import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import About from './pages/About';
import Highlights from './pages/Highlights';


function App() {
  return (
      <Router>

        <div>
          <Nav />
          <About />
          <Highlights />
          <Footer />

        </div>
        

      </Router>
  );
}

export default App;