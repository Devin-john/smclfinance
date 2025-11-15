// src/index.js ya src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Ise import karein
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* ⬇️ Apne poore App component ko BrowserRouter se wrap karein ⬇️ */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);