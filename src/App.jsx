import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components
import Header from './components/Header/Header.jsx';
import Projects from './components/Projects/Projects.jsx';
import Home from './components/HomePage/Home.jsx';
import TheJourney from './components/TheJourney/TheJourney.jsx';
import Pending from './components/Pending/Pending.jsx';
import SeeMoreProjects from './components/Projects/SeeMoreProjects.jsx';
import Footer from './components/Footer/Footer.jsx';
//css
import './App.css';

function App() {
  //useState
  const [darkMode, setDarkMode] = useState(false);

  //function to toggle darkmode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark'); // Add 'dark' class to element
    } else {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from element
    }

    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/thejourney' element={<TheJourney />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/pending' element={<Pending />} />
          <Route path='/seemoreprojects' element={<SeeMoreProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
