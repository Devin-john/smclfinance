import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Navbar from './Navbar';
import LoanForm from './LoanForm';
import Footer from './Footer';

import About from './Routes/About.jsx';     
import Contact from './Routes/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-grey-50">

      {/* 1. Navbar hamesha dikhega (Routes ke Bahar) */}
      <Navbar />

      {/* 2. Routes: Yahan par page content render hoga */}
      <main className="flex-grow">
        <Routes>
          {/* Path 1: Root Path (/) will show the Loan Form (Main Page) */}
          <Route path="/" element={<LoanForm />} /> 
          
          {/* Path 2: /about will show the About page */}
          <Route path="/About" element={<About/>} />
          
          {/* Path 3: /contact will show the Contact page */}
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Not Found Page */}
          <Route path="*" element={<h1 className="text-center p-8 text-xl">404 Page Not Found</h1>} />
        </Routes>
      </main>
      
      {/* 3. Footer hamesha bottom mein dikhega */}
      <Footer />
    </div>
  );
}

export default App;