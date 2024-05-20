import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components
import Header from './components/Header/Header.jsx';
import Projects from './components/Projects/Projects.jsx';
import Home from './components/HomePage/Home.jsx';
import TheJourney from './components/TheJourney/TheJourney.jsx';
import Pending from './components/Pending/Pending.jsx';
import SeeMoreProjects from './components/Projects/SeeMoreProjects.jsx';
//css
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/thejourney' element={<TheJourney />} />
        <Route path='/projects' element={<SeeMoreProjects />} />
        <Route path='/pending' element={<Pending />} />
        <Route path='/seemoreprojects' element={<SeeMoreProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
