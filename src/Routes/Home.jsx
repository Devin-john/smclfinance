import React from 'react';
// Import LoanForm yahan karna hai, taki Hero section upar aa sake.
import LoanForm from '../LoanForm';

const Home = () => {
  return (
    <div className="home-page">
      {/* ⬇️ HERO SECTION (Aapki image ke anusaar) ⬇️ */}
      <div className="bg-blue-900 text-white p-12 mb-8 flex justify-center items-center">
        <div className="max-w-6xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Fast & Secure Home & Business Loans
          </h1>
          <p className="text-xl font-light text-blue-200">
            Lowest interest - Quick approval - 100% paperless process
          </p>
        </div>
      </div>
      
      {/* ⬇️ Loan Form Component (Aapka pehla component) ⬇️ */}
      <LoanForm />
    </div>
  );
};

export default Home;