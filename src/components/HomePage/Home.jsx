import React from 'react';

import HeroSection from '../Hero/HeroSection.jsx';
import Projects from '../Projects/Projects.jsx';
import ContactPage from '../ContactPage/ContactPage.jsx';

const Home = ({ darkMode }) => {
  return (
    <>
      <HeroSection darkMode={darkMode} />

      <Projects darkMode={darkMode} />

      <ContactPage darkMode={darkMode} />
    </>
  );
};

export default Home;
