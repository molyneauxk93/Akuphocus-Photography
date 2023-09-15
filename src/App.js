import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';

function App() {
  return (
      <Router>

        <div>
          <Nav />
          <About />
        </div>
        

      </Router>
  );
}

export default App;