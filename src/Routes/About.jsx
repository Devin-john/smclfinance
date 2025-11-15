import React from 'react';
import visionIllustration from '../assets/vision-illustration.jpg'; // Your background image path

const AboutSection = () => {
  const sectionStyle = {
    position: 'relative',
    color: '#ffffff',     // White text as in screenshot
    fontFamily: 'Arial, sans-serif',
    padding: '60px 40px',
    maxWidth: '1000px',
    margin: 'auto',
    backgroundImage: `url(${visionIllustration})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '8px',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.9)',  // Strong dark shadow for depth
    zIndex: 1,
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Darker black overlay for good contrast
    borderRadius: '8px',
    zIndex: 2,
  };

  const contentStyle = {
    position: 'relative',  // Place text above overlay
    zIndex: 3,
    maxWidth: '700px',
  };

  const headingStyle = {
    fontWeight: '900',       // Extra bold
    fontSize: '28px',        // Slightly larger
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  };

  const subheadingStyle = {
    fontWeight: '700',
    fontSize: '22px',
    marginTop: '40px',
    marginBottom: '16px',
    textTransform: 'uppercase',
  };

  const paragraphStyle = {
    lineHeight: '1.8',
    fontSize: '16px',
    marginBottom: '24px',
    color: '#ddd',           // Slightly softer white for paragraph
  };

  return (
    <section style={sectionStyle}>
      {/* Dark overlay */}
      <div style={overlayStyle}></div>

      {/* Content */}
      <div style={contentStyle}>
        <h2 style={headingStyle}>ABOUT US</h2>
        <p style={paragraphStyle}>
          Today, we are a dedicated team of financial experts and innovators, committed to empowering our clients.
          We specialize in providing tailored financial planning, investment management, and loan solutions.
          Our approach blends traditional ethics with modern, tech-forward solutions to deliver clear results and foster
          sustainable growth. We pride ourselves on operating with the highest levels of integrity, professionalism,
          and a commitment to putting our customers first in every decision we make.
        </p>

        <h3 style={subheadingStyle}>OUR VISION</h3>
        <p style={paragraphStyle}>
          Our Vision is to provide Consumers & small business owners can borrow through SMCL to get loans customised to their needs at a fast pace & at transparent finance charges.
          We utilise our technology to provide a better experience, offering borrowers a convenient, simple & fast online application that improves
          the often time-consuming & frustrating Business Loan application process. We will generate unique scores based on each customer profile using our
          proprietary credit engine which will help them avail loans from our lending partners.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
