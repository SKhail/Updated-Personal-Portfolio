import React from 'react';

//Css
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-[#0f1733] px-6 py-8 text-center text-blue-100'>
      <div className='mx-auto max-w-5xl'>
        <p className='font-body text-sm'>Built by Said Khail</p>
        <p className='mt-2 font-body text-xs text-blue-200/70'>AI-focused portfolio assistant for skills, experience, projects, and contact details.</p>
      </div>
    </footer>
  );
};

export default Footer;
