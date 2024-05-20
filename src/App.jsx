import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Header from './components/Header/Header.jsx';
import HeroSection from './components/Hero/HeroSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import Projects from './components/Projects/Projects.jsx';
//css
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Header />
        <HeroSection />
        <Projects />
        <Footer />
      </>
    </Router>
  );
}

export default App;
