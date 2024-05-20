import React from 'react';

import HeroSection from '../Hero/HeroSection.jsx';
import Projects from '../Projects/Projects.jsx';
import Footer from '../Footer/Footer.jsx';
import ContactPage from '../ContactPage/ContactPage.jsx';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <ContactPage />
      <Footer />
    </>
  );
};

export default Home;
