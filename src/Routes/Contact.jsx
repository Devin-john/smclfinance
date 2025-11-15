// Contact.js

import React from 'react';
// import ContactForm from '../components/ContactForm'; // Agar form alag component hai

const Contact = () => {
  return (
    <div className="contact-page container">
      <h1>Contact Us</h1>
      <p>WHERE VISION MEET VALUE</p>
      
      {/* Contact Details */}
      <section className="contact-details">
          <p>📧 Email: sumstarmanagementconsultancy1@gmail.com</p>
          <p>📞 Phone: +91 7348407798</p>
          <p>📍 Address: [ sector 44 noida]</p>
      </section>
      
      {/* Contact Form */}
      {/* <ContactForm /> */}
      
    </div>
  );
};

export default Contact;