import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Photos from './components/Photos';

import About from './pages/About';
import Contact from './pages/Contact';
import Photoshoot from './pages/Photoshoot';
import Pricing from './pages/Pricing';


function App() {
  return (
      <Router>

        <div>
          <Nav />

          {/* begin routes to swap out pages */}
          <Routes>

            <Route 
            path="/"
            element={<About />}
          />
          
          <Route
          path="/contact"
          element={<Contact />}
          />

          <Route
          path="/photoshoot"
          element={<Photoshoot />}
          />

          <Route
          path="/pricing"
          element={<Pricing />}
          />

          </Routes>
        
          

        </div>
        
        <Footer />
      </Router>
  );
}

export default App;