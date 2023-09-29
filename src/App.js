import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import About from './pages/About';
import Contact from './pages/Contact';


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

          </Routes>
        
          

        </div>
        
        <Footer />
      </Router>
  );
}

export default App;