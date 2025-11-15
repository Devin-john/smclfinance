import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Navbar from './Navbar.jsx';
import LoanForm from './LoanForm.jsx';
import Footer from './Footer.jsx';

import About from './Routes/About.jsx';     
import Contact from './Routes/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-grey-50">

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LoanForm />} /> 
          
          <Route path="/About" element={<About/>} />
          
          <Route path="/contact" element={<Contact />} />
          
          
          <Route path="*" element={<h1 className="text-center p-8 text-xl">404 Page Not Found</h1>} />
        </Routes>
      </main>
      

      <Footer />
    </div>
  );
}

export default App;