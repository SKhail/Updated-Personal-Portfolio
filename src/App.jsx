import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

//Components
import Header from './components/Header/Header.jsx';
import Home from './components/HomePage/Home.jsx';
import ContactPage from './components/ContactPage/ContactPage.jsx';
import CVPage from './components/CVPage/CVPage.jsx';
import SeeMoreProjects from './components/Projects/SeeMoreProjects.jsx';
import Footer from './components/Footer/Footer.jsx';
//css
import './App.css';

function AppLayout() {
  //useState
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  //function to toggle darkmode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv' element={<CVPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/projects' element={<SeeMoreProjects />} />
        <Route path='/seemoreprojects' element={<SeeMoreProjects />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
